"use client"
import {Editor} from "@tiptap/core";
import styles from "./headingMenu.module.css";
import {useState} from "react";

export default function HeadingMenu({editor} : {editor: Editor}){

    const [headingToggle, setHeadingToggle] = useState(false)

    const handleHeadingToggle = () => {
        setHeadingToggle(!headingToggle)
    }

    return (
        <>
            <div className={styles.headingPopUp}>
                <button
                    className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} ${styles.heading}`}
                    onClick={()=>handleHeadingToggle()}
                >
                    Heading
                </button>
                {
                    [3, 4, 5, 6].map((n: number) => (
                        <button
                            key={n}
                            onClick={() => {
                                // @ts-ignore
                                editor.chain().focus().toggleHeading({ level: n }).run()
                                handleHeadingToggle()
                            }}
                            className={editor.isActive('heading', { level: n }) ? 'is-active' : ''}
                            hidden={!headingToggle}
                        >
                            H{n}
                        </button>
                    ))
                }
            </div>
        </>
    )
}