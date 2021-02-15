import React, { useEffect, useRef, useState } from 'react'
import {convertToRaw, Editor, EditorState, RichUtils} from 'draft-js';
import 'draft-js/dist/Draft.css'
import StyleControls from './BlockStyleControls';

const DraftJSEditor = () => {
  const [editorEnable, setEditorEnable] = useState(false)
  const [editorState, setEditorState] = useState(() => 
    EditorState.createEmpty()
  );
  const editorRef = useRef<Editor>(null)

  useEffect(() => {
    setEditorEnable(true)
  }, [])

  const handleToggleInlineStyle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    const styleString = event.currentTarget.getAttribute('aria-label') as string
    setEditorState(RichUtils.toggleInlineStyle(editorState, styleString))
  }

  const handlers = {handleToggleInlineStyle, }

  return (
    <div onClick={() => {editorRef.current?.focus()}}>
      {editorEnable && (
        <>
        <StyleControls editorState={editorState} handlers={handlers} />
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
