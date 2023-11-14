"use client"
import styles from "./codeBlockMenu.module.css";
import {Editor} from "@tiptap/core";
import React from "react";
import Modal from "@/components/editor/floating-menu/items/image/modals/Modal";

// @ts-ignore
export default function CodeBlockMenu({editor}: {editor: Editor}){
    return (
        <>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={editor.isActive('codeBlock') ? 'is-active' : ''}
            >
                Code
            </button>
        </>
    )
}