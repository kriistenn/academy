import React from "react";
import styles from './seven.module.css'
import like from './img/like.svg'
import brain from './img/brain.svg'
import music from './img/music.svg'
import video from './img/video.svg'
import group from './img/Group.svg'
import roket from './img/roket.svg'

const SevenComponentLayout = () => {
    return (
        <div className={styles['section-like']}>
            <div className={styles['wrapper']}>
                <div className={styles['title-main']}>Почему ребятам нравится в GeekSchool</div>
                <div className={styles['w-layout']}>
                    <div className={styles['usp-content']}>
                        <img alt='img' src={brain} />
                        <div className={styles["usp-heading"]}>Общее развитие</div>
                        <div className={styles["usp-text"]}>
                            Ребята улучшают логику, добиваются намеченных целей, тренируют творческое и проектное мышление. Эти навыки помогут и в учёбе, и в жизни
                        </div>
                    </div>
                    <div className={styles['usp-content']}>
                        <img alt='img' src={music} />
                        <div className={styles["usp-heading"]}>Постоянная поддержка</div>
                        <div className={styles["usp-text"]}>
                            Кураторы GeekSchool поддерживают ребят и помогают им настроиться на успех. Если возникла сложность, куратор всегда рядом
                        </div>
                    </div>
                    <div className={styles['usp-content']}>
                        <img alt='img' src={group} />
                        <div className={styles["usp-heading"]}>Друзья по интересам</div>
                        <div className={styles["usp-text"]}>
                            Ребята находят единомышленников, с которыми интересно учиться, делиться идеями, решать необычные задачи, обмениваться впечатлениями после уроков
                        </div>
                    </div>
                    <div className={styles['usp-content']}>
                        <img alt='img' src={roket} />
                        <div className={styles["usp-heading"]}>Осязаемый результат</div>
                        <div className={styles["usp-text"]}>
                            Ребята видят результат работы: к концу обучения они презентуют финальный проект, собирают портфолио и получают диплом об окончании курса
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SevenComponentLayout