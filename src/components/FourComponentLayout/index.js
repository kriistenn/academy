import React from "react";
import styles from './four.module.css'
import ReactPlayer from 'react-player'
import games_one from './games_one.jpg'
import ori from './ori.jpg'
import valley from './valley.jpg'

const FourComponentLayout = () => {
    return (
        <div className={styles['section']}>
            <div className={styles['container']}>
                <h2 className={styles['h2-four']}>На Unity создают</h2>
                <div className={styles['row']}>
                    <div className={styles['col']}>
                        <div className={styles['video']}>
                            <ReactPlayer width="250px" height="140px" controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc'  />
                        </div>
                    </div>
                    <div className={styles['col']}>
                        <div className={styles['video']}>
                            <ReactPlayer width="250px"  height="140px" controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc'  />
                        </div>
                    </div>
                    <div className={styles['col']}>
                        <div className={styles['video']}>
                            <ReactPlayer width="250px"  height="140px" controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc'  />
                        </div>
                    </div>
                    <div className={styles['col']}>
                        <div className={styles['video']}>
                            <ReactPlayer width="250px"  height="140px" controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc'  />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['container-games']}>
                <h3 className={styles['h3-four-games']}>Международные игры</h3>
                <div className={styles['row']}>
                    <div className={styles['col-two']}>
                        <div className={styles['container-games-item']}>
                            <img alt={'games'} className={styles['img_four']} src={games_one} />
                            <h4 className={styles['h4_four-games']}>Hearthstone</h4>
                            <div>Самая популярная коллекционная карточная игра в мире</div>
                        </div>
                    </div>
                    <div className={styles['col-two']}>
                        <div className={styles['container-games-item']}>
                            <img alt={'games'} className={styles['img_four']} src={ori} />
                            <h4 className={styles['h4_four-games']}>Аркадный платформер</h4>
                            <div>Наикрасивейший аркадный платформер</div>
                        </div>
                    </div>
                    <div className={styles['col-two']}>
                        <div className={styles['container-games-item']}>
                            <img alt={'games'} className={styles['img_four']} src={valley} />
                            <h4 className={styles['h4_four-games']}>Monument Valley 2</h4>
                            <div>Увлекательная изометрическая головоломка</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourComponentLayout