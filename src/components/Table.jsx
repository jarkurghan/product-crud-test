import React, { useState } from "react";
import ModalComponent from "./AddProduct";
import UpdateProduct from "./UpdateProduct";

const Table = ({ products, handleDeleteProduct, handleAddProduct, handleUpdateProduct, category }) => {
    const [updated, setUpdated] = useState({});
    const [modalShow, setModalShow] = useState(false);

    const updateProduct = (product) => {
        setUpdated(product);
        setModalShow(true);
    }

    return (
        <section>
            <div className="container-xs h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-9 col-xl-7">
                        <div className="card rounded-3">
                            <div className="px-4">
                                <ModalComponent category={category} onSubmit={handleAddProduct} />
                                <h4 className="text-center my-3 pb-3 text-uppercase bold">{category}</h4>
                                {products.length === 0 ? <h5>No products</h5> :
                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">№</th>
                                                <th scope="col">title</th>
                                                <th scope="col">price</th>
                                                <th scope="col">description</th>
                                                <th scope="col">actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, index) => (
                                                <tr key={product.id}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td style={{ maxWidth: "100px" }}>{product.title}</td>
                                                    <td >{product.price}$</td>
                                                    <td style={{ maxWidth: "300px" }}>{product.description}</td>
                                                    <td>
                                                        <button className="btn btn-primary" onClick={() => updateProduct(product)}>
                                                            Update
                                                        </button>
                                                        <button className="btn btn-danger mx-2" onClick={() => handleDeleteProduct(product.id)}>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>}
                                <UpdateProduct {...updated} setModalShow={setModalShow} modalShow={modalShow} onSubmit={handleUpdateProduct} category={category} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Table;
