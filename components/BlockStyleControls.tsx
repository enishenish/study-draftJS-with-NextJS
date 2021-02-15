import { EditorState } from 'draft-js'
import React from 'react'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CodeIcon from '@material-ui/icons/Code';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';

import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatClearIcon from '@material-ui/icons/FormatClear';
import TextFormatIcon from '@material-ui/icons/TextFormat';
import { IconButton } from '@material-ui/core';
import ColoredIconButton from './ColoredIconButton';

const StyleControls = ({
  editorState,
  handlers,
}: {
  editorState: EditorState;
  handlers: {
    handleToggleInlineStyle: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
  };
}) => {
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();
  const inlineStyle = editorState.getCurrentInlineStyle();

  return (
    <div>
      <ColoredIconButton
        label="BOLD"
        onBgColor={"#333333"}
        offBgColor={"#BBBBBB"}
        isOn={inlineStyle.has("BOLD")}
        Icon={FormatBoldIcon}
        handler={handlers.handleToggleInlineStyle}
      />
      <ColoredIconButton
        label="ITALIC"
        onBgColor={"#333333"}
        offBgColor={"#BBBBBB"}
        isOn={inlineStyle.has("ITALIC")}
        Icon={FormatItalicIcon}
        handler={handlers.handleToggleInlineStyle}
      />
      <ColoredIconButton
        label="UNDERLINE"
        onBgColor={"#333333"}
        offBgColor={"#BBBBBB"}
        isOn={inlineStyle.has("UNDERLINE")}
        Icon={TextFormatIcon}
        handler={handlers.handleToggleInlineStyle}
      />

      {/* <IconButton aria-label="H1"><TextFormatIcon/></IconButton> */}
      {/* <IconButton aria-label="H2"><TextFormatIcon/></IconButton> */}
      {/* <IconButton aria-label="H3"><TextFormatIcon/></IconButton> */}
      {/* <IconButton aria-label="H4"><TextFormatIcon/></IconButton> */}
      {/* <IconButton aria-label="H5"><TextFormatIcon/></IconButton> */}
      {/* <IconButton aria-label="H6"><TextFormatIcon/></IconButton> */}
      <IconButton aria-label="Blockquote">
        <FormatQuoteIcon />
      </IconButton>
      <IconButton aria-label="UL">
        <FormatListBulletedIcon />
      </IconButton>
      <IconButton aria-label="OL">
        <FormatListNumberedIcon />
      </IconButton>
      <IconButton aria-label="CodeBlock">
        <CodeIcon />
      </IconButton>
      <IconButton aria-label="Clear">
        <FormatClearIcon />
      </IconButton>
    </div>
  );
};

export default StyleControls
