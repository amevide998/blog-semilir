import styles from './uploadImageModal.module.css'
import React, {SetStateAction} from "react";

export default function UploadImageModal(
    {showcase, modal, setModal, uploadHandler, uploadImage, setUploadImage} :
        {
            showcase: string
            modal: boolean,
            setModal: React.Dispatch<SetStateAction<boolean>>,
            uploadHandler: () => void,
            uploadImage: string
            setUploadImage: (file: any) => void

        }
) {
    return (
        <div className={styles.uploadImage}>
            <div className={styles.imageCoverButton}
                    onClick={()=> setModal(!modal)}
            >
                {
                    showcase !== "" ? <img src={showcase} alt={"image-cover"} />
                        : "Upload Cover Image"
                }

            </div>
            { modal &&
                (
                    <div className={styles.uploadImageModal}>
                        <div className={styles.modalItems}>
                            <div className={styles.imageOptions}>
                                <p> Image URL </p>
                                <input type="text" onChange={(e) => {
                                    // @ts-ignore
                                    setUploadImage(e.target.value)
                                }}/>
                                <div className={styles.submitCoverImage}>
                                    <button className={styles.submitCoverImageButton}
                                            onClick={()=> uploadHandler()}
                                    >
                                        Upload
                                    </button>
                                    <button className={styles.cancelUploadImageButton}
                                            onClick={()=> setModal(false)}
                                    >
                                        cancel
                                    </button>
                                </div>
                            </div>
                            <div className={styles.imagePreview}>
                                <img src={uploadImage} alt={"image-cover"}/>
                            </div>
                        </div>
                    </div>
                )}
        </div>

    )
}