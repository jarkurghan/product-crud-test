import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent(props) {
    const isUpdate = props.operation === "update"
    const [title, setTitle] = useState(props.title || "");
    const [price, setPrice] = useState(props.price || "");
    const [category, setCategory] = useState(props.category || "mans");
    const [description, setDescription] = useState(props.description || "");

    useEffect(() => {
        setTitle(props.title);
        setPrice(props.price);
        setCategory(props.category);
        setDescription(props.description);
    }, [props])

    const onSubmit = () => {
        if (isUpdate) props.onSubmit({ id: props.id, category, title, price, description });
        else props.onSubmit({ category, title, price, description });
        props.onHide();
    }


    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{isUpdate ? "Update" : "Add"} product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form className="mb-4 pb-2">
                    <div className="row g-3 justify-content-center align-items-center">
                        <div className="col-6">
                            <div className="form-outline">
                                <input
                                    type="text"
                                    id="form1"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    placeholder="name"
                                />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input type="text" className="form-control" aria-label="price" placeholder="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)} />
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-group">
                                <select className="form-select form-select" aria-label=".form-select example" disabled={isUpdate}
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}>
                                    <option value="mans">Mans</option>
                                    <option value="womans">Womans</option>
                                    <option value="kids">Kids</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="input-group">
                                <textarea className="form-control" rows="3" style={{ resize: "none" }} placeholder="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} color="danger">
                    Close
                </Button>
                <Button onClick={onSubmit}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;
