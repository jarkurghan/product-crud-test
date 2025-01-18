import React from "react";
import Modal from "./Modal";

export default function UpdateProduct(props) {
    return <Modal show={props.modalShow} onHide={() => props.setModalShow(false)} {...props} operation="update" onSubmit={props.onSubmit} />
}
