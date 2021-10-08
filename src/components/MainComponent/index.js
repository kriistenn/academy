import React from "react";
import styles from  './main.module.css'
import circle from './img/circle.svg'
import boy_img from './img/boy.png'
import circle_2 from './img/circle2.svg'

const MainComponent = () => {
    return (
        <div className={styles['container']}>
            <img src={circle} className={styles['hu-oval-2']} alt={'circle'}/>
            <div className={styles['hero-container-new']}>
                <div className={styles['hero-text-wrap']}>
                    <h1>Разработка игр на&nbsp;Unity</h1>
                    <p className={styles["hero-p"]}>Под руководством опытного преподавателя ученики создадут 3D-игру: разработают
                        сюжет, дизайн и механику.</p>
                    <div className={styles['links-wrap']}>
                        <button className={styles['hero-btn-new']}>
                            Записаться
                        </button>
                    </div>
                </div>
                <img className={styles['circle_two']} alt={'circle'} src={circle_2}/>
            </div>
        </div>
    )
}

export default MainComponent