import React from "react";
import { BlocksControls, InlineImage } from "react-tinacms-inline";
import "../styles/images.css";

/**
 * 1. Define the Block Component
 */
function Images({ index }: any) {
  return (
    <BlocksControls index={index} focusRing={{ offset: 0 }} insetControls>
      <div className="wrapper">
        <div className="image-diptych">
          <InlineImage
            name="left.src"
            parse={filename => `${filename}`}
            uploadDir={() => "/image"}
            previewSrc={(formValues: any) =>
              `/cra-hosted-demo/${formValues.blocks[index].left.src}`
            }
            focusRing={false}
          />
          <InlineImage
            name="right.src"
            parse={filename => `/${filename}`}
            uploadDir={() => "/"}
            previewSrc={(formValues: any) =>
              `/cra-hosted-demo/${formValues.blocks[index].right.src}`
            }
            focusRing={false}
          />
        </div>
      </div>
    </BlocksControls>
  );
}

/**
 * 2. Define the Block with
 *  the Template and Component
 */
export const imagesBlock = {
  Component: Images,
  template: {
    label: "Image Diptych",
    defaultItem: {
      _template: "images",
      left: {
        src: "/ivan-bandura-unsplash-square.jpg",
        alt: "ocean",
      },
      right: {
        src: "/martin-sanchez-unsplash-square.jpg",
        alt: "dunes",
      },
    },
    fields: [
      {
        name: "left.src",
        label: "Left-Hand Image",
        component: "image",
        parse: (filename: any) => `/${filename}`,
        uploadDir: () => "/",
        previewSrc: (formValues: any, input: any) => {
          /**
           * Get index from field input. Assumes the block
           * is only one level deep
           */
          const index = input.field.name.split(".")[1];
          console.log(input.field);
          /**
           * Use that index to target the correct
           * block in `formValues`
           */
          const currentBlockImage = `/cra-hosted-demo/${formValues.blocks[index].left.src}`;
          return currentBlockImage;
        },
        focusRing: false,
      },
      {
        name: "left.alt",
        label: "Left-Hand Image Alt Text",
        component: "text",
      },
      {
        name: "right.src",
        label: "Right-Hand Image",
        component: "image",
        parse: (filename: any) => `/${filename}`,
        uploadDir: () => "/",
        previewSrc: (formValues: any, input: any) => {
          const index = input.field.name.split(".")[1];
          const currentBlockImage = `/cra-hosted-demo/${formValues.blocks[index].right.src}`;
          return currentBlockImage;
        },
        focusRing: false,
      },
      {
        name: "right.alt",
        label: "Right-Hand Image Alt Text",
        component: "text",
      },
    ],
  },
};
