import React, { useState } from "react";
import MonacoEditor from "react-monaco-editor";

const Editor = () => {
  const [code, setCode] = useState("");
  const options = {
    selectOnLineNumbers: true,
  };

  const handleOnChange = (e) => {
    console.log("onChange: ", e);
  };

  const editorDidMount = (editor, monaco) => {
    console.log("editorDidMount", editor);
    editor.focus();
  };

  return (
    <MonacoEditor
      width="800"
      height="600"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
      onChange={handleOnChange}
      editorDidMount={editorDidMount}
    />
  );
};

export default Editor;
