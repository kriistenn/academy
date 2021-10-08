import React, {useState} from "react";
import img_one from './img/img_one.jpg'
import img_two from './img/img_two.jpg'
import img_three from './img/img_three.jpg'
import img_four from './img/img_four.jpg'
import img_five from './img/img_five.jpg'
import img_six from './img/img_six.jpg'
import styles from './location.module.css'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';




const LocationBlock = () => {
    return (
        <div className={styles['section']}>
            <div className={styles['title-main']}>Почему ребятам нравится в GeekSchool</div>
            <div className={styles['container']}>
                <div className={styles['adaptive-slider']}>
                    <AwesomeSlider>
                        <div data-src={img_one} />
                        <div data-src={img_two}/>
                        <div data-src={img_three} />
                        <div data-src={img_four} />
                        <div data-src={img_five} />
                        <div data-src={img_six} />
                    </AwesomeSlider>
                </div>
            </div>
        </div>
    )
}


export default LocationBlock