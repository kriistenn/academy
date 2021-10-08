import React from "react";
import styles from './footer.module.css'
import Instagram from "./instagram";
import Facebook from "./Facebook";
import Telegram from "./Telegram";

const Footer = () => {
    return (
        <div className={styles['mn-footer']}>
            <div className={styles['mn-footer-wrapper']}>
                <div className={styles['mn-top_block-container']}>
                    <div className={styles['logotip']}>LOGO</div>
                    <div className={styles['mn-phone_block']}>
                        <div className={styles['mn-phone']}>
                            <a href="tel:88007006841" className={styles["mn-phone-link"]}>8 800 700-68-41</a>
                            <div className={styles["mn-phone-description"]}>Бесплатно по России</div>
                        </div>
                        <div className={styles['mn-phone']}>
                            <a href="tel:88007006841" className={styles["mn-phone-link"]}>8 800 700-68-41</a>
                            <div className={styles["mn-phone-description"]}>Бесплатно по России</div>
                        </div>
                    </div>
                    <div className={styles['mn-email_block']}>
                        <a href="mailto:support@geekbrains.ru" className={styles['email-link']}>support@geekbrains.ru</a>
                    </div>
                    <div className={styles['mn-footer-social']}>
                        <ul className={styles['mn-footer-social-list']}>
                            <li>
                                <a href="https://www.instagram.com/geekbrains.ru/" className={styles['mn-footer-social-link']}>
                                    <Instagram/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/geekbrains.ru/" className={styles['mn-footer-social-link']}>
                                    <Facebook/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/geekbrains.ru/" className={styles['mn-footer-social-link']}>
                                    <Telegram/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer