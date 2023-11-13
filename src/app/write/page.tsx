"use client"
import styles from './writePage.module.css';
import {
    BubbleMenu,
    EditorContent,
    FloatingMenu,
    useEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit';
import Image from "@tiptap/extension-image";
import React, {useState} from 'react';
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'




export default function TipTap() {

    const [headingToggle, setHeadingToggle] = useState(false)
    const [listToggle, setlistToggle] = useState(false)


    const handleHeadingToggle = () => {
        setHeadingToggle(!headingToggle)
    }

    const handleSlistToggle = () => {
        setlistToggle(!listToggle)
    }




    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Image,
            StarterKit
        ],
        content:`<p>i want to write about .....</p>`,

    })

    // const addImageHandler = () => {
    //     const url = window.prompt("Enter image url")
    //     if(url){
    //         if(editor){
    //             editor.chain().insertContent(`<img src=${url} alt={""}/>`).run()
    //         }
    //     }
    // }

    const [modalOpen, setModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [imageCaption, setImageCaption] = useState('');
    const [imageOptions, setImageOptions] = useState("url");
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const addImageHandler = () => {
        openModal();
    };

    const handleModalSubmit = () => {
        if (editor) {
            if(imageOptions == "url"){
                if(imageUrl.trim() == ""){
                    return alert("Please enter image url")
                }
                console.log('url', imageUrl)
                // editor.chain().focus().setImage({src: imageUrl}).run();
                closeModal();

            }

            if(imageOptions == "upload"){
                if(selectedImage == null){
                    return alert("Please select image")
                }

                const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
                if(!acceptedImageTypes.includes(selectedImage['type'])){
                    return alert("Please select image of type gif, jpeg, or png")
                }
                console.log('upload', selectedImage)
                // editor.chain().focus().setImage({src: selectedImage}).run();
                closeModal();
            }

            const imageTag = `<img src="${imageUrl}" alt="${imageCaption}" />`;
            const captionTag = imageCaption ? `<figcaption>${imageCaption}</figcaption>` : '';
            const content = `<figure> ${imageTag}${captionTag} </figure>`;


            // editor.commands.setImage({src: imageUrl, alt: imageCaption, title: imageCaption});
            // editor.chain().focus().insertContent(content).run();
            // closeModal();
        }
    };

    const showContent = () => {
        if (editor) {
            const content = editor.getHTML(); // Mengambil HTML konten dari editor
            console.log('Konten Editor:', content);
        }
    };


    return (
        <div className={styles.editor}>
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

            {editor && <FloatingMenu className={styles.floatingMenu} tippyOptions={{ duration: 100 }} editor={editor}>
                <div className={styles.headingPopUp}>
                    <button
                        className={`${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''} ${styles.heading}`}
                        onClick={()=>handleHeadingToggle()}
                    >
                        Heading
                    </button>
                    {
                        [1, 2, 3, 4, 5, 6].map((n: number) => (
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

                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'is-active' : ''}
                >
                    Code
                </button>

                <button
                    onClick={() => addImageHandler()}
                >
                    img
                </button>
                {modalOpen && (
                    <div className={styles.modal}>
                        <div className={styles.imgOptions}>
                            <span className={styles.imgUrlOptions}
                                  style={{border: imageOptions === "url" ? '1px solid black' : 'none'}}
                                  onClick={() => setImageOptions("url")}>
                                URL
                            </span>
                                {" or "}
                            <span className={styles.imgUploadOptions}
                                      style={{border: imageOptions === "upload" ? '1px solid black' : 'none'}}
                                      onClick={() => setImageOptions("upload")}>
                                UPLOAD
                            </span>
                        </div>
                        <label>
                            <input
                                type="text"
                                value={imageUrl}
                                hidden={imageOptions !== "url"}
                                onChange={(e) => setImageUrl(e.target.value)} />
                        </label>
                        <label>
                            <input type="file"
                                   hidden={imageOptions !== "upload"}
                                   // @ts-ignore
                                   onChange={(e) => setSelectedImage(e.target.files[0])} />
                        </label>
                        <button onClick={handleModalSubmit}>
                            Add Image
                        </button>
                        <button onClick={closeModal}>
                            Cancel
                        </button>
                    </div>
                )}
            </FloatingMenu>}

            {/*<button onClick={showContent}>*/}
            {/*    Show Content*/}
            {/*</button>*/}

            <input type="text" value={""}/>
            <input type="text" value={""}/>
            <EditorContent editor={editor} />
        </div>
    )
}