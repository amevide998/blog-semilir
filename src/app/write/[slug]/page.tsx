"use client"
import styles from './writePage.module.css';
import {
    EditorContent,
    useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Image from "@tiptap/extension-image";
import React from 'react';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import FloatingMenuEditor from "@/components/editor/floating-menu/FloatingMenuEditor";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Unauthorize from "@/components/unauthorize/Unauthorize";
export default function TipTap({params} : {params: {slug: string}}) {

    const {status} = useSession();
    const router = useRouter()


    console.log('params ', params)
    console.log('cek status', status)


    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Image,
            StarterKit
        ],
        content:`<h1>Untitle</h1><h2>Subtitle...</h2><p>about...</p>`,
    })

    if(status !== "authenticated") {
        return (
            <>
                <Unauthorize />
            </>
        )
    }


    return (
        <div className={styles.editor}>
            {
                editor && <FloatingMenuEditor editor = {editor}/>
            }

            <button onClick={()=> {
                if (editor) {
                    const content = editor.getHTML(); // Mengambil HTML konten dari editor
                    console.log('Konten Editor:', content);
                }
            }}>
                Show Content
            </button>

            <div className="tiptap-body">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}