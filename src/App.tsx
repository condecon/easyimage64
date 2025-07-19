import { useState } from 'react'
import './App.css'

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
  async function readFile(file: File){
    if(!file.type.startsWith("image")){
      alert("Only images are supported!");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setContent(reader.result as string);
    }
    
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
   * @returns {Promise<void>} Resolves when the image has been read and processed.
   * @throws {Error} If clipboard access fails or no image is found in the clipboard.
   */
  async function readFileFromClipboard(){
    const result = await navigator.clipboard.read();
    const item = result.at(0);

    const type = item!.types.filter((value) => value.startsWith("image"))[0];
    console.log(type)
    const blob = await item?.getType(type);

    const reader = new FileReader();
    reader.onload = () => {
      setContent(reader.result as string);
    }
    
    reader.readAsDataURL(blob!);
  }

  return (
    <>
      <h1>Image64</h1>

      <input type="file" onChange={(e) => {
        const file = e.target.files![0];
        readFile(file);
      }}/>

      <button type="button" onClick={readFileFromClipboard}>Read file from clipboard</button>

      <h3>Result</h3>
      <textarea value={content} rows={75} cols={100}/>
    </>
  )
}

export default App
