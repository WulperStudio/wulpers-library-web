import React from "react";
import { TinaContextProvider } from "./TinaContext";
import { Editor, EditorPropsType } from "./Editor";

const TinaComponent = (props: EditorPropsType) => {
  return (
    <TinaContextProvider>
      <Editor {...props} />
    </TinaContextProvider>
  );
};

export default TinaComponent;
