import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "./Modal";

export default function AddProduct(props) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)} className="float-end my-3">
                Add
            </Button>

            <Modal show={modalShow} onHide={() => setModalShow(false)} category={props.category} onSubmit={props.onSubmit} />
        </div>
    );
}
