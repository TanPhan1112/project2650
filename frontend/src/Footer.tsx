import { useTranslation } from 'react-i18next';
import React from 'react';

function Footer() {
    const { t } = useTranslation();

    return (
        <div>
            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <h3 className="text-center">{t('footer.footerTitle')}</h3>
                    <h6 className="text-center">{t('footer.footerHeading')}</h6>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-primary mb-2" data-bs-toggle="modal" data-bs-target="#liveChat">
                            {t('footer.chatBtn')}
                        </button>
                    </div>

                    <form method="get">
                        <div className="row justify-content-center">
                            <input type="email" className="col-4" name="email" id="email" placeholder={t('footer.email')} />
                            <button className="col-2 signup btn btn-primary" type="submit">{t('footer.signUp')}</button>
                            <button className="col-1 signup btn btn-primary" type="reset">{t('footer.reset')}</button>
                        </div>
                    </form>

                    <figure className="text-center">
                        <blockquote className="blockquote">
                            <p>{t('footer.copyright')} &copy; 2021 pctech.com</p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            {t('footer.createdBy')} <cite title="authors">Phan, Duc Minh Tan and Nguyen, Hoang Nam</cite>
                        </figcaption>
                    </figure>
                </div>

                <div className="modal fade" id="liveChat" tabIndex={-1} aria-labelledby="liveChatLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="liveChatLabel">{t('footer.liveChat')}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="chatArea">
                                    <ul className="messages list-group">
                                        <li className="list-group-item">
                                            <div className="row">
                                                <div className="col-2 mx-auto">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-file-person mt-2" viewBox="0 0 16 16">
                                                        <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                                        <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                    </svg>
                                                </div>
                                                <div className="col">
                                                    {t('footer.welcomeMes')}
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder={t('footer.msgEnter')} aria-label="messageInput" aria-describedby="button-addon2" />
                                    <button type="submit" className="btn btn-outline-primary" id="button-addon2">{t('footer.send')}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;