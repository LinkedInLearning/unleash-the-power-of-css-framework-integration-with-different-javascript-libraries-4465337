import { useState } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";                                       
import { Editor } from "primereact/editor";  

function App() {
  const [text, setText] = useState('');
  return (
    <div className="card">
      <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
    </div>
  );
}

export default App;
