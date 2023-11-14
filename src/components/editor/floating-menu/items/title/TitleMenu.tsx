"use client"
import styles from "./titleMenu.module.css";
import React from "react";
import {Editor} from "@tiptap/core";
export default function TitleMenu({editor} : {editor: Editor}) {

    const titleHandler = () => {
        if (!editor) {
            return alert("Please open editor")
        }

        const regex = /<h1>(.*?)<\/h1>/;
        if (editor.getHTML().match(regex)) {
            return alert("Title already exist")
        }
        editor.chain().focus().toggleHeading({level: 1}).run()
    }

    return (
        <>
            {/*@ts-ignore*/}
            <button onClick={() => titleHandler()}
                    className={editor.isActive('heading') ? 'is-active' : ''}
            >
                Title
            </button>
            {/*@ts-ignore*/}
            <button onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                    className={editor.isActive('heading') ? 'is-active' : ''}
            >
                SubTitle
            </button>
        </>
    )
}