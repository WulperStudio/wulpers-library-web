import React from "react";
import { BlocksControls } from "react-tinacms-inline";
import {
  jsonParse,
  textColorForm,
  textAlignForm,
  fontSizeForm,
  jsonForm,
} from "../utils";
import ReactMarkdown from "react-markdown";
import { InlineWysiwyg } from "react-tinacms-editor";
import Typography from "@material-ui/core/Typography";
import gfm from "remark-gfm";

function Paragraph({ index, data }: any) {
  const { text_color, text_align, font_size, subtext, styles } = data;
  const stylesParse = jsonParse(styles);
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }}>
      <Typography
        variant="body1"
        component="p"
        style={{
          color: text_color,
          textAlign: text_align,
          fontSize: font_size,
          ...stylesParse,
        }}
      >
        {subtext}
      </Typography>
    </BlocksControls>
  );
}

export const ParagraphBlock = {
  Component: Paragraph,
  template: {
    label: "Paragraph",
    defaultItem: {
      _template: "p",
      subtext:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      text_color: "#000000",
      text_align: "center",
      font_size: "16px",
      styles: "{}",
    },
    fields: [
      textColorForm(),
      textAlignForm,
      fontSizeForm(["14px", "16px", "18px"]),
      jsonForm,
    ],
  },
};
