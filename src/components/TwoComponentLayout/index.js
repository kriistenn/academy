import React from "react";
import styles from './two.module.css'
import person from './kids.jpg'

const TwoComponentLayout = () => {
    return (
        <div className={styles['section']}>
            <div className={styles['container']}>
                <div className={styles['row']}>
                    <div className={styles['col']}>
                        <h2 className={styles['h2-two']}>Кому подойдёт курс</h2>
                        <ul className={styles['check-list']}>
                            <li className={styles["check-li"]}>Ребятам, которые хотят научиться программировать</li>
                            <li className={styles["check-li"]}>Тем, кто любит играть в компьютерные игры и готов создать свою</li>
                            <li className={styles["check-li"]}>Всем, кто хочет творить и создавать новое</li>
                        </ul>
                    </div>
                    <div className={styles['col']}>
                        <img alt={'person'} className={styles['img_person']} src={person}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TwoComponentLayout