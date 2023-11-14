"use client"
import styles from "./listMenu.module.css";
import {Editor} from "@tiptap/core";
import React, {useState} from "react";


export default function ListMenu({editor} : {editor: Editor}) {

    const [listToggle, setlistToggle] = useState(false)

    const handleSlistToggle = () => {
        setlistToggle(!listToggle)
    }

    return (
        <>
            <div className={styles.listPopUp}>
                <button
                    onClick={() => handleSlistToggle()}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                >
                    List
                </button>

                <button
                    onClick={() => {
                        editor.chain().focus().toggleBulletList().run()
                        handleSlistToggle()}}
                    className={editor.isActive('bulletList') ? 'is-active' : ''}
                    hidden={!listToggle}
                >
                    Bullet
                </button>
                <button
                    onClick={() => {
                        editor.chain().focus().toggleOrderedList().run()
                        handleSlistToggle()}}
                    className={editor.isActive('orderedList') ? 'is-active' : ''}
                    hidden={!listToggle}
                >
                    Ordered
                </button>
            </div>

        </>
    )

}
