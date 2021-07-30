import React, { useState, useEffect, ReactNode } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';

interface Product {
    _id: ReactNode;
    // add the required properties here
    name: string,
    quantity: string,
    price: string,
    brand: string,
    id: number
};

const productService = client.service('products');

function Products() {
    const [allProducts, setAllProducts] = useState<Array<Product>>([]);

    const productRows = allProducts.map((product: Product) =>
        <tr key={product.id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.brand}</td>
        </tr>
    );

    useEffect(() => {
        productService
            .find()
            .then((productPage: Paginated<Product>) => setAllProducts(productPage.data))
            .catch((err: any) => {
                console.log("problem finding products.");
            });
    }, []);

    return (
        <body>
            <h2>Products</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>
        </body>
    );
}

export default Products;