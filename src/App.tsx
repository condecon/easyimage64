import { useState } from "react";
import "./App.css";
import { AppBar, Button, TextField } from "@mui/material";
import { VisuallyHiddenInput } from "./VisuallyHiddenInput";

function App() {
  const [content, setContent] = useState<string>("");

  /**
   * Reads an image file and sets its content as a base64-encoded data URL.
   *
   * @param file - The image file to be read.
   * @remarks
   * - Only files with a MIME type starting with "image" are supported.
   * - If the file is not an image, an alert is shown and the function returns early.
   * - The file is read asynchronously using a FileReader.
   * - On successful read, the result is set as a string via `setContent`.
   */
  async function readFile(file: File) {
    if (!file.type.startsWith("image")) {
      alert("Only images are supported!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setContent(reader.result as string);
    };

    reader.readAsDataURL(file);
  }

  /**
   * Reads an image file from the user's clipboard and converts it to a data URL.
   *
   * This function uses the Clipboard API to access clipboard contents, filters for image types,
   * retrieves the image as a Blob, and then reads it as a data URL using FileReader.
   * The resulting data URL is set as the content via `setContent`.
   *
   * @async
   */
  async function readFileFromClipboard() {
    const result = await navigator.clipboard.read();
    const item = result.at(0);

    const type = item!.types.filter((value) => value.startsWith("image"))[0];
    console.log(type);
    const blob = await item?.getType(type);

    const reader = new FileReader();
    reader.onload = () => {
      setContent(reader.result as string);
    };

    reader.readAsDataURL(blob!);
  }

  /**
   * Writes a string to the user's clipboard.
   * @param content 
   * @async
   */
  async function writeResultToClipboard(content: string){
    navigator.clipboard.writeText(content);
  }

  return (
    <>
      <AppBar position="static">
        <h1>EasyImage64</h1>
      </AppBar>

      <div className="content">
        <div className="content-row">
          <Button variant="contained" tabIndex={-1} role={undefined} component="label">
          Choose File
          <VisuallyHiddenInput type="file"
            onChange={(e) => {
            const file = e.target.files![0];
            readFile(file);
          }}
          accept="image/*"
          />
        </Button>
        </div>

        <div className="content-row">
          <Button variant="contained"
            onClick={readFileFromClipboard}>
              Read file from clipboard
            </Button>
        </div>

        <h2>Result</h2> <Button onClick={() => {
          writeResultToClipboard(content)
        }}>Copy result to clipboard</Button>
        <TextField
          value={content}
          multiline
          rows={75}
          fullWidth={true}
        />
      </div>
    </>
  );
}

export default App;
