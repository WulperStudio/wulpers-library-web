import React, { useState, useEffect } from "react";
import { useCMS, useForm, usePlugin } from "tinacms";
import axios from "axios";
import { InlineForm, InlineBlocks } from "react-tinacms-inline";
import { heroBlock } from "./components/Hero";
import configTinaForm from "./configTinaForm";
import { NavbarBlock } from "./components/Navbar";
import useTinaContext from "./TinaContext";
import { HeadingBlock } from "./components/Heading";
import { ParagraphBlock } from "./components/Paragraph";
import { ImageBlock } from "./components/Image";
import { VideoBlock } from "./components/Video";

const updateLandings = (id: any, data: any, token: string) => {
  return axios.put(`${process.env.strapiServer}/pages-histories/${id}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export interface EditorPropsType {
  token: string;
  initialValues: any;
  edit: boolean;
  type: "landing" | "blog";
}

export function Editor({ token, initialValues, edit, type }: EditorPropsType) {
  //@ts-ignore
  const [state, setState] = useTinaContext();
  useEffect(() => {
    setState({
      token: token,
      edit: edit,
      type: type,
      hitoryId: initialValues.id,
    });
  }, [token, edit, initialValues]);

  const cms = useCMS();
  const formConfig = {
    id: "./data/data.js",
    initialValues: initialValues.data,
    onSubmit(data: any) {
      cms.alerts.success("Saved!");
    },
    label: "Site information",
    fields: configTinaForm,
  };
  const [data, form] = useForm(formConfig);

  useEffect(() => {
    if (edit) {
      updateLandings(state.hitoryId, { data }, token).then((result: any) => {
        setState({ hitoryId: result.data.id });
      });
    }
  }, [data]);

  usePlugin(form);

  return (
    <div className="home">
      <InlineForm form={form}>
        <InlineBlocks
          name="blocks"
          blocks={type === "landing" ? LANDING_BLOCKS : BLOG_BLOCKS}
        />
      </InlineForm>
    </div>
  );
}

const LANDING_BLOCKS = {
  navbar: NavbarBlock,
  hero: heroBlock,
};

const BLOG_BLOCKS = {
  h1: HeadingBlock,
  p: ParagraphBlock,
  image: ImageBlock,
  video: VideoBlock,
};
