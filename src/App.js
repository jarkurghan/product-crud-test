import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import { getProducts, saveProducts } from "./utils/localStorageHelper";

const TodoApp = () => {
    const [products, setProducts] = useState(getProducts());

    const handleAddProduct = (product) => {
        let maxID = 1;
        products.mans.forEach(pro => {
            if (pro.id >= maxID) maxID = pro.id + 1;
        });
        products.womans.forEach(pro => {
            if (pro.id >= maxID) maxID = pro.id + 1;
        });
        products.kids.forEach(pro => {
            if (pro.id >= maxID) maxID = pro.id + 1;
        });

        product.id = maxID;
        products[product.category].push(product);

        console.log(products);
        setProducts({ ...products });
    };


    const handleUpdateProduct = (product) => {
        const elem = products[product.category].find(e => e.id === product.id);
        elem.title = product.title;
        elem.price = product.price;
        elem.description = product.description;
        setProducts(products);
    }


    const handleDeleteProduct = (id) => {
        setProducts({
            mans: products.mans.filter((product) => product.id !== id),
            kids: products.kids.filter((product) => product.id !== id),
            womans: products.womans.filter((product) => product.id !== id),
        });
    };

    useEffect(() => {
        saveProducts(products)
    }, [products])

    return (
        <div className="h-100 min-vh-100 pb-4" style={{ backgroundColor: "#eee" }}>
            <div className="container-xxl">
                <div className="row d-flex flex-row justify-content-between pb-6 px-20">
                    <h1 className="text-center">Products</h1>
                </div>
            </div>

            <div className="d-flex gap-5 flex-column mb-6" >
                <Table products={products.kids} category="kids" handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct} handleAddProduct={handleAddProduct} />
                <Table products={products.mans} category="mans" handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct} handleAddProduct={handleAddProduct} />
                <Table products={products.womans} category="womans" handleDeleteProduct={handleDeleteProduct} handleUpdateProduct={handleUpdateProduct} handleAddProduct={handleAddProduct} />
            </div>
        </div>
    );
};

export default TodoApp;
