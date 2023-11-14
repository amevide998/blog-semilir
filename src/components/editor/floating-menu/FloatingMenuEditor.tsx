"use client"
import styles from "./floatingMenu.module.css";
import React, {useState} from "react";
import {Editor} from "@tiptap/core";
import {FloatingMenu} from "@tiptap/react";
import HeadingMenu from "@/components/editor/floating-menu/items/heading/HeadingMenu";
import TitleMenu from "@/components/editor/floating-menu/items/title/TitleMenu";
import ListMenu from "@/components/editor/floating-menu/items/list/ListMenu";
import CodeBlockMenu from "@/components/editor/floating-menu/items/code-block/CodeBlockMenu";
import ImageMenu from "@/components/editor/floating-menu/items/image/ImageMenu";

export default function FloatingMenuEditor({editor}: {editor: Editor}) {

    return (
        <>
        {editor && <FloatingMenu className={styles.floatingMenu} tippyOptions={{ duration: 100 }} editor={editor}>
            {editor && <TitleMenu editor={editor} />}
            {editor && <HeadingMenu editor={editor} />}
            {editor && <ListMenu editor={editor} />}
            {editor && <CodeBlockMenu editor={editor} />}
            {editor && <ImageMenu editor={editor}/>}
        </FloatingMenu>}
        </>)
}