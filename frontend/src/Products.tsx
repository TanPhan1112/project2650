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

<<<<<<< HEAD
  const productRows = allProducts.map((product: Product) =>
    <tr key={product.id}>
      <td>{product._id}</td>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
      <td>{product.brand}</td>
    </tr>
  );
=======
    const productRows = allProducts.map((product: Product) =>
        <tr key={product.id}>
            <th>{product._id}</th>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.brand}</td>
            <td>
                <button type="button" className="btn btn-outline-success btn-rounded-circle waves-effect pt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                </button>
            </td>
        </tr>
        
    );
>>>>>>> 8e96d89685b2c03d221c252fcb1a1927d470fdbe

  useEffect(() => {
    productService
      .find()
      .then((productPage: Paginated<Product>) => setAllProducts(productPage.data))
      .catch((err: any) => {
        console.log("problem finding products.");
      });
  }, []);

<<<<<<< HEAD
  return (
    <body>
      <h2>Products</h2>
      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 me-2" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
        Cart
=======
    return (
        <body>
            <h2 className="text-center mt-3 pt-3">Products</h2>
            <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 me-2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                Cart
>>>>>>> 8e96d89685b2c03d221c252fcb1a1927d470fdbe
            </button>

      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Your shopping cart</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

<<<<<<< HEAD
            <div className="modal-body">
              <table className="table table-image">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                    <th scope="col">Total</th>
                    <th scope="col">Actions</th>
                  </tr>
=======
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Brand</th>
                        <th scope="col"></th>
                    </tr>
>>>>>>> 8e96d89685b2c03d221c252fcb1a1927d470fdbe
                </thead>

                <tbody>
<<<<<<< HEAD
                  <tr>
                    <td>Something</td>
                    <td>Something</td>
                    <td>89$</td>
                    <td className="qty"><input type="text" className="form-control" id="cart-qty" value="2" /></td>
                    <td>178$</td>
                    <td>
                      <a href="#" className="btn btn-danger btn-sm">
                        Remove
                                        </a>
                    </td>
                  </tr>
=======
                   {productRows}
>>>>>>> 8e96d89685b2c03d221c252fcb1a1927d470fdbe
                </tbody>
              </table>
              <div className="d-flex justify-content-end">
                <h5>Total: <span className="price text-success">89$</span></h5>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-success">Checkout</button>
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