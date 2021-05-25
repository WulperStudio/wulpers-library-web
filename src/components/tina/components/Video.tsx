import React from "react";
import { BlocksControls } from "react-tinacms-inline";
import Player from "../../atoms/Player";
import { jsonForm, jsonParse } from "../utils";

function Video({ index, data }: any) {
  const { video, width, height, styles } = data;
  const stylesParse = jsonParse(styles);
  return (
    <BlocksControls
      index={index}
      focusRing={{ offset: 0 }}
      //@ts-ignore
      className="MuiGrid-grid-xs-12"
      insetControls
    >
      <div style={stylesParse}>
        {/*@ts-ignore*/}
        <Player url={video} height={height} width={width} />
      </div>
    </BlocksControls>
  );
}

export const VideoBlock = {
  Component: Video,
  template: {
    label: "Video",
    defaultItem: {
      _template: "video",
      video:
        "https://www.youtube.com/watch?v=RK1RRVR9A2g&ab_channel=FreeHDvideos-nocopyright",
      height: 400,
      styles: "{}",
    },
    fields: [
      {
        name: "video",
        label: "URL Video",
        component: "text",
      },
      {
        name: "width",
        label: "Width",
        component: "number",
        defaultValue: "",
      },
      {
        name: "height",
        label: "Height",
        component: "number",
        defaultValue: "400",
      },
      jsonForm,
    ],
  },
};
