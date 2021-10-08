import React from "react";
import styles from './five.module.css'
import one from './one.svg'
import two from './two.svg'
import three from './three.svg'

const FiveComponentLayout = () => {
    return (
        <div className={styles['section']}>
            <div className={styles['container']}>
                <h2 className={styles['h2-five']}>Как проходит учёба</h2>
                <div className={styles['row-five-one']}>
                    <div className={styles['col-five']}>
                        <img alt={'one'} src={three} className={styles['how-img']} />
                    </div>
                    <div className={styles['col-five']}>
                        <h4 className={styles["how-heading"]}>Занятие с ментором </h4>
                        <p className={styles["how-text"]}>Занятия проходят 5 раз в неделю, длительность занятия 3-4 часа. За
                            это время на занятии с ментором ученики разберут новую тему, зададут вопросы и
                            получат ответы.</p>
                    </div>
                </div>
                <div className={styles['row-five']}>
                    <div className={styles['col-five']}>
                        <h4 className={styles["how-heading"]}>Персональный проект </h4>
                        <p className={styles["how-text"]}>На данном этапе ментор способствует его завершению</p>
                    </div>
                    <div className={styles['col-five']}>
                        <img alt={'one'} src={two} className={styles['how-img']} />
                    </div>
                </div>
                <div className={styles['row-five-one']}>
                    <div className={styles['col-five']}>
                        <img alt={'one'} src={one} className={styles['how-img']} />
                    </div>
                    <div className={styles['col-five']}>
                        <h4 className={styles["how-heading"]}>Поддержка</h4>
                        <p className={styles["how-text"]}>Ментор готов ответить на вопросы учащихся и вне занятий. А еще учеников поддерживает саппорт, которые всегда на связи, следит за посещением и помогает с решением организационных вопросов.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FiveComponentLayout