import React, {} from 'react'
import styles from './nine.module.css'

const NineComponentLayout = () => {

    return (
        <div className={styles['section-form']}>
            <div className={styles['container']}>
                <h2 className={styles["form-heading"]}>Успейте записаться, пока есть места на курсе</h2>
                <div className={styles['form-inner']}>
                    <div className={styles['form__item']}>
                        <div className={styles['form-content']}>
                            <div className={styles["big-p"]}>Стоимость обучения</div>
                            <div className={styles['price-wrap-2']}>
                                <h2 className={styles["old-prise"]}>
                                    <span className={styles['full-price']} >18 000</span> ₽
                                </h2>
                            </div>
                            <div className={styles['midl-text']}>
                                Или
                                <span>
                                    <strong className={styles['bold-price-yellow']}> 6 000</strong>
                                </span>
                                <span className={styles['bold-price-yellow']}><strong> руб. ежемесячно</strong></span>
                                &nbsp;— подробности&nbsp;у&nbsp;менеджера.
                            </div>
                            <div className={styles["opacity-40"]}>Продолжительность</div>
                            <div className={styles['form-bold']}>
                                <strong>3 месяца</strong><br/>
                            </div>
                            <div className={styles["small-p"]}>
                                Наш менеджер ответит на все вопросы и поможет подобрать
                                удобное время.
                            </div>
                            <div className={styles["desc-text-wrap"]}>
                                <div className={styles["text-block-34"]}>Успейте записаться пока есть места на курсе</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['form__item-right']}>
                        <div className={styles['email-form']}>
                            <form className={styles['form']}>
                                <h2 className={styles["form__title"]}>Оставьте заявку</h2>
                                <input
                                    type={'text'}
                                    className={styles['form-block-field-2']}
                                    placeholder="Ваше имя"
                                />
                                <input
                                    type={'email'}
                                    className={styles['form-block-field-2']}
                                    placeholder="exaple@mail.ru"
                                />
                                <div className={styles['container-input']}>
                                    <input
                                        type={'tel'}
                                        className={styles['form-block-field-2']}
                                        placeholder="+996 000 000 000"
                                    />
                                </div>
                                <div className={styles['container-input']}>
                                    <input
                                        type={'text'}
                                        className={styles['form-block-field-2']}
                                        placeholder="Комментарий"
                                    />
                                </div>
                                <div className={styles['btn']}>
                                    <input type="submit" value="Записаться" className={styles["btn-input-send"]}/>
                                </div>
                                <p className={styles["form-block-desc-2"]}>Отправляя заявку, вы принимаете условия
                                    <a href="https://gb.ru/dogovor" target="_blank"> договора оферты</a>
                                    и даёте согласие на обработку своих персональных данных в соответствии с
                                    <a href="https://gb.ru/confidential"> политикой конфиденциальности.</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NineComponentLayout