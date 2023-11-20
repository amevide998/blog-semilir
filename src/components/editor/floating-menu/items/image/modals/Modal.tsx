"use client"
import styles from "./modal.module.css";
import React, {useState} from "react";
import {Editor} from "@tiptap/core";

export default function Modal({editor}: {editor: Editor}) {

    const [modalOpen, setModalOpen] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [imageCaption, setImageCaption] = useState('');
    const [imageOptions, setImageOptions] = useState("url");
    const [selectedImage, setSelectedImage] = useState(null);


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
                // Todo, upload image and get back the url
                // editor.chain().focus().setImage({src: selectedImage}).run();
                closeModal();
            }

            const imageTag = `<img src="${imageUrl}" alt="${imageCaption}" />`;
            const captionTag = imageCaption ? `<figcaption>${imageCaption}</figcaption>` : '';
            const content = `<figure> ${imageTag}${captionTag} </figure>`;


            editor.commands.setImage({src: imageUrl, alt: imageCaption, title: imageCaption});
            editor.chain().focus().insertContent(content).run();
            closeModal();
        }
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);
    const addImageHandler = () => {
        openModal();
    };


    return (
        <>
            <button
                onClick={() => setModalOpen(!modalOpen)}
                className={editor.isActive('image') ? 'is-active' : ''}
            >
                Image
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
        </>
    )
}