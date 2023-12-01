import React from "react";
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles['site-footer']}>
            <div className={styles.container}>
                <div className={styles['contacts-footer']}>
                    <ul>
                        <li>Copyright &copy; Design by Mihail Donchev</li>
                    </ul>
                </div>
                <div className={styles['footer-icons']}>
                    <ul>
                        <li><a href="https://www.facebook.com/"><i className="fa-brands fa-facebook"></i></a><span>Facebook</span></li>
                        <li><a href="https://github.com/MADNMD"><i className="fa-brands fa-github"></i></a><span>Github</span></li>
                        <li><a href="https://www.linkedin.com/in/mihail-donchev-6a400025a/"><i className="fa-brands fa-linkedin"></i></a><span>Linkedin</span></li>
                        <li><a href="https://madnmd.github.io/My-Portfolio.github.io/"><i className="fa-solid fa-globe"></i></a><span>Portfolio</span></li>
                    </ul>
                </div>
            </div>
        </footer>

    )
}