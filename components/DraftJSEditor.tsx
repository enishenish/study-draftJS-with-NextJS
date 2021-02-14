import React, { useEffect, useRef, useState } from 'react'
import {convertToRaw, Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css'

const DraftJSEditor = () => {
  const [editorEnable, setEditorEnable] = useState(false)
  const [editorState, setEditorState] = useState(() => 
    EditorState.createEmpty()
  );
  const editorRef = useRef<Editor>(null)

  useEffect(() => {
    setEditorEnable(true)
  }, [])

  const handleBoldClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const selection = editorState.getSelection()
    const content = editorState.getCurrentContent()
    console.log(selection);
    console.log(content);
    console.log(convertToRaw(content))
    setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))
  }

  return (
    <div onClick={() => {editorRef.current?.focus()}}>
      {editorEnable && (
        <>
        <button onMouseDown={handleBoldClick}>Bold</button>
        <Editor
          ref={editorRef}
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
