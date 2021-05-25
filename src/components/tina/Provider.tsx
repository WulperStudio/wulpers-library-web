import React, { ReactChild } from "react";
import { TinaProvider, TinaCMS } from "tinacms";
import { MediaStore } from "./MediaStore";
import { MarkdownFieldPlugin, HtmlFieldPlugin } from "react-tinacms-editor";

export default function Provider({
  children,
  baseUrl,
}: {
  children: ReactChild;
  baseUrl: string;
}) {
  const cms = new TinaCMS({
    enabled: true,
    sidebar: {
      buttons: {
        save: "Apply",
        reset: "",
      },
    },
    toolbar: false,
    //@ts-ignore
    media: new MediaStore(baseUrl),
  });

  cms.plugins.remove({
    __type: "screen",
    name: "Media Manager",
  });

  cms.plugins.add(MarkdownFieldPlugin);
  cms.plugins.add(HtmlFieldPlugin);

  return <TinaProvider cms={cms}>{children}</TinaProvider>;
}
