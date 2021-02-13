import React, { useEffect, useState } from 'react'
import {convertToRaw, Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css'

const DraftJSEditor = () => {
  const [editorEnable, setEditorEnable] = useState(false)
  const [editorState, setEditorState] = useState(() => 
    EditorState.createEmpty()
  );

  const handleBoldClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const selection = editorState.getSelection()
    const content = editorState.getCurrentContent()
    console.log(selection);
    console.log(content);
    console.log(convertToRaw(content))
    

  }

  useEffect(() => {
    setEditorEnable(true)
  }, [])

  return (
    <div>
      {editorEnable && (
        <>
        <button onClick={handleBoldClick}>Bold</button>
        <Editor
          placeholder="Write something!"
          editorKey="test-key"
          editorState={editorState}
          onChange={setEditorState}
        />
        </>
      )}
    </div>
  );
}

export default DraftJSEditor
