import React, { useState, useEffect, ReactNode } from 'react';
import { Paginated } from '@feathersjs/feathers';
import client from './feathers';
import ReactGA from 'react-ga';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();
    const [allProducts, setAllProducts] = useState<Array<Product>>([]);

    const productRows = allProducts.map((product: Product) =>
        <tr key={product.id}>
            <td>{product._id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>{product.price}</td>
            <td>{product.brand}</td>
            <td>
                <button type="button" className="btn bg-transparent text-success btn-lg pt-0" data-bs-toggle="modal" data-bs-target="#addProductModal">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-plus" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                </button>
            </td>
        </tr>
    );

    useEffect(() => {
        productService
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

    return (
        <div>
            <Header />
            <h2>{t('products.title')}</h2>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart4 me-2" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
                {t('products.shoppingCart')}
            </button>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{t('products.shoppingCart')}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <table className="table table-image">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">{t('products.productName')}</th>
                                        <th scope="col">{t('products.brand')}</th>
                                        <th scope="col">{t('products.quantity')}</th>
                                        <th scope="col">{t('products.price')}</th>
                                        <th scope="col">{t('products.total')}</th>
                                        <th scope="col">{t('products.delete')}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Something</td>
                                        <td>Something</td>
                                        <td>89$</td>
                                        <td className="qty"><input type="text" className="form-control" id="cart-qty" value="2" /></td>
                                        <td>178$</td>
                                        <td>
                                            <a href="#" className="btn btn-danger btn-sm">
                                                {t('products.remove')}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="d-flex justify-content-end">
                                <h5>{t('products.total')}<span className="price text-success">89$</span></h5>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">{t('products.close')}</button>
                            <button type="button" className="btn btn-success">{t('products.checkout')}</button>
                        </div>
                    </div>
                </div>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">{t('products.productName')}</th>
                        <th scope="col">{t('products.brand')}</th>
                        <th scope="col">{t('products.quantity')}</th>
                        <th scope="col">{t('products.price')}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>
            <Footer />
        </div>
    );
}

export default Products;