import React from "react";
import { BlocksControls } from "react-tinacms-inline";
import Typography from "@material-ui/core/Typography";
import { jsonParse, jsonForm } from "../utils";

export const List = ({ index, data }: any) => {
  const { list, styles } = data;
  const stylesParse = jsonParse(styles);
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }}>
      <Typography variant="body1" component="ul" style={{ ...stylesParse }}>
        {list &&
          list.map((l: { item: string }, i: number) => (
            <Typography variant="body1" component="li" key={i}>
              {l.item}
            </Typography>
          ))}
      </Typography>
    </BlocksControls>
  );
};

export const ListBlock = {
  Component: List,
  template: {
    label: "List",
    defaultItem: {
      _template: "list",
      list: [{ item: "item 1" }, { item: "item 2" }, { item: "item 3" }],
    },
    fields: [
      {
        label: "List",
        name: "list",
        component: "group-list",
        itemProps: (value: { item: any }) => ({
          label: value.item,
        }),
        defaultItem: () => {
          return {
            item: "new item",
          };
        },
        fields: [
          {
            label: "Item",
            name: "item",
            component: "text",
          },
          jsonForm,
        ],
      },
    ],
  },
};
