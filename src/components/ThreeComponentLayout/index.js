import React from "react";
import styles from './three.module.css'
import roket from './img/rocet.png'
import pazl from './img/pazl.png'
import head from './img/head.png'

const ThreeComponentLayout = () => {
    return (
        <div className={styles['section']}>
            <div className={styles['container']}>
                <h2 className={styles['h2-three']}>Три причины пройти курс по разработке игр на Unity</h2>
                <div className={styles['row']}>
                    <div className={styles['col']}>
                        <div className={styles['reason']}>
                            <img alt={'roket'} className={styles['img']} src={roket}/>
                        </div>
                        <h4>Перспективы</h4>
                        <p>
                            Unity — это ведущая платформа разработки интерактивного контента с 2D- и 3D-графикой, 50% всех игр созданы на ней. Больше половины игр из 1000 самых кассовых тоже разработали на Unity, а значит ученики начнут осваивать востребованную и высокооплачиваемую технологию.
                        </p>
                    </div>
                    <div className={styles['col']}>
                        <div className={styles['reason']}>
                            <img alt={'head'} className={styles['img']} src={head}/>
                        </div>
                        <h4>Постоянное развитие</h4>
                        <p>
                            Unity — это ведущая платформа разработки интерактивного контента с 2D- и 3D-графикой, 50% всех игр созданы на ней. Больше половины игр из 1000 самых кассовых тоже разработали на Unity, а значит ученики начнут осваивать востребованную и высокооплачиваемую технологию.
                        </p>
                    </div>
                    <div className={styles['col']}>
                        <div className={styles['reason']}>
                            <img alt={'pazl'} className={styles['img']} src={pazl}/>
                        </div>
                        <h4>Весёлый досуг</h4>
                        <p>
                            Unity — это ведущая платформа разработки интерактивного контента с 2D- и 3D-графикой, 50% всех игр созданы на ней. Больше половины игр из 1000 самых кассовых тоже разработали на Unity, а значит ученики начнут осваивать востребованную и высокооплачиваемую технологию.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeComponentLayout