import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p> */}
                <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">
                        <div className="form-outline">
                            <input
                                type="text"
                                id="form1"
                                className="form-control"
                                // value={newTask}
                                // onChange={(e) => setNewTask(e.target.value)}
                                placeholder="Enter a task here"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        <div class="input-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" />
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} color="danger">
                    Close
                </Button>
                <Button onClick={props.onHide}>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setModalShow(true)} className="float-end my-3">
                Add
            </Button>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}
