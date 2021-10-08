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
            {/*<div className={styles['container-sales']}>*/}
            {/*    <img alt={'star'} className={styles['bg-img']} src={space} />*/}
            {/*    <img alt={'star'} className={styles['bg-img_two']} src={star_two} />*/}
            {/*    <div className={styles['economy-block']}>*/}
            {/*        <h2 className={styles['h2_eight-economy']}>Учитесь и экономьте</h2>*/}
            {/*        <div className={styles["center-text-eight"]}>Оставьте заявку, и наш менеджер расскажет подробности.</div>*/}
            {/*        <div className={styles['economy-item']}>*/}
            {/*            <div className={styles['economy-percent']}>*/}
            {/*                <div className={styles['economy-percent-text']}>-5%</div>*/}
            {/*            </div>*/}
            {/*            <div className={styles['economy-text-wrap']}>*/}
            {/*                <p className={styles['economy-text-wrap_p']}>*/}
            {/*                    Получите скидку 5% при покупке двух и более курсов за полгода.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className={styles['economy-item']}>*/}
            {/*            <div className={styles['economy-percent']}>*/}
            {/*                <div className={styles['economy-percent-text']}>-5%</div>*/}
            {/*            </div>*/}
            {/*            <div className={styles['economy-text-wrap']}>*/}
            {/*                <p className={styles['economy-text-wrap_p']}>*/}
            {/*                    Получите скидку 5% при покупке двух и более курсов за полгода.*/}
            {/*                </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default EightComponentLayout