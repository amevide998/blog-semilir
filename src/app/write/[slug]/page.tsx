"use client"
import styles from './writePage.module.css';
import {
    EditorContent,
    useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Image from "@tiptap/extension-image";
import React, {useCallback, useEffect, useState} from 'react';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import FloatingMenuEditor from "@/components/editor/floating-menu/FloatingMenuEditor";
import {useSession} from "next-auth/react";
// import {useRouter} from "next/navigation";
import Unauthorize from "@/components/unauthorize/Unauthorize";
import Loader from "@/components/loader/Loader";
import {router} from "next/client";
import {useRouter} from "next/navigation";
export default function TipTap({params} : {params: {slug: string}}) {

    // @ts-ignore
    const {status, data} = useSession();
    // const router = useRouter();
    const [posts, setPosts] = useState({
        author: {email: ""}
    })
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()

    const [isAuthorized, setIsAuthorized] = useState(false)

    const editor = useEditor({
        extensions: [
            Image,
            StarterKit
        ],
        content:`<h1>Untitle</h1><h2>Subtitle...</h2><p>about...</p>`,
    })

    const getData = async () =>{
        if (data) {
            const res = await fetch(`/api/post?slug=${params.slug}`, {
                headers: {
                    //@ts-ignore
                    token: data['loggedUser']
                }
            })
            if(!res.ok){
                throw res.status
            }
            return await res.json()
        }
    }


    useEffect(  () => {
        //@ts-ignore
        if(params && data?.['loggedUser']){
            getData().then(result => {
                setPosts(result.data)
                setLoading(false)
                setIsAuthorized(true)
                const title = result.data.title
                const subtitle = result.data.subtitle
                const body = result.data.body
                const content = `<h1>${title}</h1><h2>${subtitle}</h2>${body}`
                editor?.commands.setContent(content)
            }).catch(() => {
                setIsAuthorized(false)
            })
        }
    }, [params, data])



    if(status !== "authenticated") {
        if(status === "loading") {
            return (
                <div className={styles.loaderContainer}>
                    <Loader />
                </div>
            )
        }else {
            return (
                <div className={styles.unauthorizedContainer}>
                    <Unauthorize />
                </div>
            )
        }
    }else {
        if(!isAuthorized){
            return (
                <div className={styles.unauthorizedContainer}>
                    <Unauthorize />
                </div>
            )
        }
    }

    return (
        <>
        { status === 'authenticated' && !isLoading && isAuthorized && (
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
                            <EditorContent editor={editor} />
                        </div>
                    )
                }
            </div>)
        }
        </>
    )
}