"use client"
import styles from './writePage.module.css';
import {
    EditorContent,
    useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Image from "@tiptap/extension-image";
import React, {useEffect, useState} from 'react';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import FloatingMenuEditor from "@/components/editor/floating-menu/FloatingMenuEditor";
import {useSession} from "next-auth/react";
// import {useRouter} from "next/navigation";
import Unauthorize from "@/components/unauthorize/Unauthorize";
export default function TipTap({params} : {params: {slug: string}}) {

    const {status, data} = useSession();
    // const router = useRouter();
    const [posts, setPosts] = useState({
        author: {email: ""}
    })
    const [isLoading, setLoading] = useState(true)


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

    useEffect(() => {
        if(data?.user){
            console.log('cek user data',)
            fetch(`/api/post?slug=${params.slug}&email=${data?.user?.email}`)
                .then((res) => res.json())
                .then((result) => {
                    setPosts(result.data)
                    setLoading(false)
                    const title = result.data.title
                    const subtitle = result.data.subtitle
                    const body = result.data.body
                    const content = `<h1>${title}</h1><h2>${subtitle}</h2>${body}`
                    editor?.commands.setContent(content)
                })
        }
    }, [data, status, params, editor])


    if(status !== "authenticated") {
        return (
            <>
                <Unauthorize />
            </>
        )
    }


    return (
        <>
        { isLoading ? <div>Loading...</div> : (
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

                {
                    editor && (
                        <div className="tiptap-body">
                            {
                                data?.user?.email === posts?.author.email ? (
                                    <EditorContent editor={editor} />
                                ): (
                                    <Unauthorize />
                                )
                            }
                        </div>
                    )
                }
            </div>
        )}
        </>
    )
}