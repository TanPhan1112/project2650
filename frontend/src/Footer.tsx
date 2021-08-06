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
            </footer>
        </div>
    );
}

export default Footer;