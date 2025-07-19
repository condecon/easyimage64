import { useState } from 'react'
import './App.css'

function App() {

  const [content, setContent] = useState<string>("");
  
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
