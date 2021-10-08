import React from 'react'
import styles from './eight.module.css'
import give from './give.svg'
import forever from './forever.svg'
import blank from './blank.svg'
import space from './space.png'
import star_two from './star_two.png'

const EightComponentLayout = () => {
    return (
        <div className={styles['section']}>
            <div className={styles['container']}>
                <h2 className={styles["half-h2"]}>Что получит ученик</h2>
                <div className={styles['container-give']}>
                    <div className={styles['item-give']}>
                        <div className={styles['unity-reason']}>
                            <img src={give} alt={'give'} className={styles['img_reason']} />
                        </div>
                        <h4 className={styles['h4-eight']}>Помощь к подготовке</h4>
                        <p className={styles['p-eight']}>Подготовим Вас к собеседованию</p>
                    </div>
                    <div className={styles['item-give']}>
                        <div className={styles['unity-reason']}>
                            <img src={forever} alt={'give'} className={styles['img_reason']} />
                        </div>
                        <h4 className={styles['h4-eight']}>Программа </h4>
                        <p className={styles['p-eight']}>Вы получите полность разработанный курс обучения сроком на 3 - 6 месяцев</p>
                    </div>
                    <div className={styles['item-give']}>
                        <div className={styles['unity-reason']}>
                            <img src={blank} alt={'give'} className={styles['img_reason']} />
                        </div>
                        <h4 className={styles['h4-eight']}>Реальные проекты</h4>
                        <p className={styles['p-eight']}>Вы получите 3-4 проекта в Ваше портфолио </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default EightComponentLayout