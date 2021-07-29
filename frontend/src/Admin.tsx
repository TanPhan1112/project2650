import React, { useState, useEffect, FormEvent, ReactNode } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';

interface Product {
    _id: ReactNode,
    name: string,
    quantity: number,
    price: number,
    brand: string,
    id: number
};

type ProductFunction = (g: Product) => void;

interface AllProductFuntions {
    addProduct: ProductFunction,
    removeProduct: ProductFunction
};

let productFuncs: AllProductFuntions = {
    addProduct: (c: Product) => { },
    removeProduct: (c: Product) => { }
};

const productsService = client.service('products');

productsService.on('created', (newProduct: Product) => {
    productFuncs.addProduct(newProduct);
});

productsService.on('removed', (oldProduct: Product) => {
    productFuncs.removeProduct(oldProduct);
});

function AdminProducts() {
    // you'll have to add some additional state varialbes here
    // for each of the form fields
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [brand, setBrand] = useState("");
    const [allProducts, setAllProducts] = useState<Array<Product>>([]);
    const [errorMessage, setErrorMessage] = useState("Forms are required");
    const [errorClass, setErrorClass] = useState("form-control");

    const handleDelete = (_id: ReactNode) => {
        productsService.remove(_id);
    }

    const productRows = allProducts.map((product: Product) =>
        <tr key={product.id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.brand}</td>
            <td></td>
            <td><button onClick={() => handleDelete(product._id)} type="button" className="btn btn-danger">Delete</button></td>
        </tr>
    );

    useEffect(() => {
        function addProductX(newProduct: Product) {
            setAllProducts([...allProducts, newProduct]);
        }

        function removeProductX(oldProduct: Product) {
            const newProducts = allProducts.filter((iproduct, index, arr) => {
                return iproduct._id !== oldProduct._id;
            });
            setAllProducts(newProducts);
        }

        productFuncs.addProduct = addProductX;
        productFuncs.removeProduct = removeProductX;
    });

    useEffect(() => {
        productsService
            .find()
            .then((productPage: Paginated<Product>) => setAllProducts(productPage.data))
            .catch((err: any) => {
                console.log("problem finding products.");
            });
    }, []);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const element = e.currentTarget as HTMLFormElement;
        if (element.checkValidity()) {
            element.classList.remove('was-validated');
            productsService
                .create({ name, quantity, price, brand })
                .then((product: Product) => {
                    // successfully created patient
                    setName("");
                    setQuantity(0);
                    setPrice(0);
                    setBrand("");
                    setErrorMessage("Forms are required");
                    setErrorClass("form-control");
                })
                .catch((err: any) => {
                    // failed to create patient
                    setErrorMessage(err.message);
                    setErrorClass("form-control is-invalid");
                });
        } else {
            element.classList.add('was-validated');
        }
    }

    return (
        <div>
            <div className="py-5 text-center">
                <h2>Products</h2>
            </div>

            <div className="row">
                <div className="col-md-12 order-md-1">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="row">
                            <div className="col-lg-6 col-md-4 mb-3">
                                <label htmlFor="name">Product name</label>
                                <input type="text" className="form-control" id="name" maxLength={50}
                                    value={name} required onChange={e => setName(e.target.value)} />
                                <div className="invalid-feedback">
                                    Product name is required.
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-4 mb-3">
                                <label htmlFor="brand">Brand</label>
                                <input type="text" className="form-control" id="brand" maxLength={50}
                                    value={brand} required onChange={e => setBrand(e.target.value)} />
                                <div className="invalid-feedback">
                                    Brand is required.
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-4 mb-3">
                                <label htmlFor="quantity">Quantity</label>
                                <input type="number" className="form-control" id="quantity"
                                    value={quantity} required onChange={e => setQuantity(parseInt(e.target.value))} />
                                <div className="invalid-feedback">
                                    Product quantity is required.
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-4 mb-3">
                                <label htmlFor="price">Price</label>
                                <input type="number" className="form-control" id="price"
                                    value={price} required onChange={e => setPrice(parseInt(e.target.value))} />
                                <div className="invalid-feedback">
                                    Product price is required.
                                </div>
                            </div>
                        </div>

                        <div className={errorClass}>
                            {errorMessage}
                        </div>
                        <br></br>
                        <button className="btn btn-primary btn-lg btn-block" type="submit">Add product</button>
                    </form>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>

        </div>
    );
}


export default AdminProducts;
