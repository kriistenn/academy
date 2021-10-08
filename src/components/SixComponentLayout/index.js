import React from 'react'
import styles from './six.module.css'
import teacher from './teacher.png'

const SixComponentLayout = () => {
    return (
        <div className={styles['section-teacher']}>
            <div className={styles['container']}>
                <h2 className={styles['h2-teacher']}>Преподаватель</h2>
                <div className={styles["center-text"]}>Занятия проводят опытные IT-специалисты</div>
                <div className={styles['container-teacher']}>
                    <div className={styles['col-five']}>
                        <div className={styles['teacher-item']}>
                            <img src={teacher} alt={'teacher'} />
                            <h4 className={styles['name']}>Роман Муратов</h4>
                            <div className={styles["teacher-about"]}>Автор программы, разработчик-фрилансер</div>
                            <p className={styles["small-p"]}>С нуля освоил движок Unity3D. Работал в геймдев-компании Panoramik
                                Inc. и международной компании-разработчике и издателе мобильных игр Playgendary.
                                Разрабатывал приложения для следователей и приложения дополненной и виртуальной
                                реальности для студентов юридических специальностей.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default  SixComponentLayout