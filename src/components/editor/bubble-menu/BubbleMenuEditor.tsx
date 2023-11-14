"use client"
import styles from './bubbleMenu.module.css'
import {Editor} from "@tiptap/core";
import {BubbleMenu} from "@tiptap/react";
import React from "react";

export default function BubbleMenuEditor({editor}: {editor: Editor}) {
    return (
        <>
            {editor && <BubbleMenu className={styles.bubbleMenu} tippyOptions={{ duration: 100 }} editor={editor}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                >
                    Bold
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'is-active' : ''}
                >
                    Italic
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'is-active' : ''}
                >
                    Strike
                </button>
            </BubbleMenu>}
        </>
    )
}