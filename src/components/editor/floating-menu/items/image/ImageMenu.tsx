import Modal from "@/components/editor/floating-menu/items/image/modals/Modal";
import {Editor} from "@tiptap/core";
import React from "react";

export default function ImageMenu({editor} : {editor: Editor}) {
    return (
        <>
            <Modal editor={editor} />
        </>
    )
}