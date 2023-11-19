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
import BubbleMenuEditor from "@/components/editor/bubble-menu/BubbleMenuEditor";
import {Editor} from "@tiptap/core";
export default function TipTap({params} : {params: {slug: string}}) {

    // @ts-ignore
    const {status, data} = useSession();
    // const router = useRouter();
    const [posts, setPosts] = useState({
        author: {email: ""}
    })
    const [isLoading, setLoading] = useState(true)
    const [isAuthorized, setIsAuthorized] = useState(false)

    const [firstLoad, setFirstLoad] = useState(true)

    const [reloadTime, setReloadTime] = useState(1000)

    const editor = useEditor({
        extensions: [
            Image,
            StarterKit
        ],
        content: "loading...",
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
        if(params && status === 'authenticated' && data?.['loggedUser'] && isLoading){
            if(!localStorage.getItem('draft-'+params.slug)){
                getData().then(result => {
                    setPosts(result.data)
                    setIsAuthorized(true)
                    const title = result.data.title
                    const subTitle = result.data.subTitle
                    const body = result.data.body
                    const content = `<h1>${title}</h1><h2>${subTitle}</h2>${body}`
                    localStorage.setItem('draft-'+result.data.slug, content)
                    setLoading(false)
                }).catch(() => {
                    setIsAuthorized(false)
                })
            }else{
                setIsAuthorized(true)
                setLoading(false)
            }
        }
    }, [params, data, status, isLoading])


    useEffect(() => {
        const interval = setInterval(() => {
            if(firstLoad){
                editor?.commands.setContent(localStorage.getItem('draft-'+params.slug))
                setFirstLoad(false)
            }
            if (editor) {
                const content = editor.getHTML(); // Mengambil HTML konten dari editor
                localStorage.setItem('draft-'+params.slug, content);
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [editor, firstLoad, params.slug]);


    if(status !== "authenticated") {
        if(status === "loading") {
            return (
                <div className={styles.loaderContainer}>
                    <Loader/>
                </div>
            )
        }

        if(status === "unauthenticated"){
            return (
                <div className={styles.unauthorizedContainer}>
                    <Unauthorize />
                </div>
            )
        }
    }

    return (
        <>
        { (status === 'authenticated' && !isLoading && isAuthorized ) ? (
            <div className={styles.editor}>
                {
                    editor && <FloatingMenuEditor editor = {editor}/>
                }
                    {editor && <BubbleMenuEditor editor={editor} />}

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
            </div>) :
            (
                <div className={styles.loaderContainer}>
                    <Loader/>
                </div>
            )
        }
        </>
    )
}