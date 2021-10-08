import React from "react";
import styles from "./one.module.css";


const OneComponentLayout = () => {
    return (
        <div className={styles['section']}>
            <div className={styles['container']}>
                <div className={styles['row-new']}>
                    <div className={styles['col']}>
                        <h2 className={styles['h2-one']}>Мы знаем, как школьникам провести время с пользой</h2>
                    </div>
                    <div className={styles['col']}>
                        <p className={styles['p-col']}>Играть в игры — это интересно, а создавать игры —
                            интереснее и даже полезнее. На курсе ученики сделают шаг к востребованной профессии
                            разработчика игр. Ребят ждут много практики, поддержка преподавателя, а в конце обучения —
                            финальный проект, сертификат и&nbsp;первая работа в портфолио.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneComponentLayout