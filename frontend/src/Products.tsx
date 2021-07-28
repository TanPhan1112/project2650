import React, { useState, useEffect, FormEvent } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';

interface Product {
    // add the required properties here
    name: string,
    quantity: string,
    price: string,
    brand: string,
    id: number
};

const productService = client.service('products');

function Products() {

    // const productRows = productService.find().map((product: Product) =>
    //     <tr key={product.id}>
    //         <td>{product.id}</td>
    //         <td>{product.name}</td>
    //         <td>{product.quantity}</td>
    //         <td>{product.price}</td>
    //         <td>{product.brand}</td>
    //     </tr>
    // );

    return (
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
            </tbody>
        </table>
    );
}

export default Products;