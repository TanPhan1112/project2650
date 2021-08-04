import React, { useState, useEffect, FormEvent, ReactNode } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';
import ReactGA from 'react-ga';

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
            <td className="mx-auto"><button onClick={() => handleDelete(product._id)} type="button" className="btn bg-transparent btn-lg pt-0 text-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
            </button></td>
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
            .then((productPage: Paginated<Product>) => {
                setAllProducts(productPage.data);
                ReactGA.event({
                    category: "Guest",
                    action: "Find",
                });
            })
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
                    ReactGA.event({
                        category: "Admin",
                        action: "Add",
                    });
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


            <button id="adminSection" type="button" className="btn btn-primary dropdown-toggle mt-3" data-bs-toggle="dropdown" aria-expanded="false">
                Database Section
            </button>
            <ul className="dropdown-menu" aria-labelledby="adminSection">
                <li><a className="dropdown-item" href="#">Products</a></li>
                <li><a className="dropdown-item" href="#">Orders</a></li>
                <li><a className="dropdown-item" href="#">Customers</a></li>
            </ul>


            <div className="py-5 text-center">
                <h2>Products
                    <button type="button" className="btn bg-transparent text-success btn-sm pt-0" data-bs-toggle="modal" data-bs-target="#addProductModal">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    </button>
                </h2>

            </div>

            <div className="modal fade" id="addProductModal" tabIndex={-1} aria-labelledby="addProductModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="addProductModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
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

                                <br></br>
                                <button className="btn btn-primary btn-sm" type="submit">Add product</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <div className={errorClass}>
                                {errorMessage}
                            </div>
                        </div>
                    </div>
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
                        <th scope="col">Action</th>
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
