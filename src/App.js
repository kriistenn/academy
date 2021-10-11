import TwoComponentLayout from "./components/TwoComponentLayout";
import ThreeComponentLayout from "./components/ThreeComponentLayout";
import FourComponentLayout from "./components/FourComponentLayout";
import FiveComponentLayout from "./components/FiveComponentLayout";
import SevenComponentLayout from "./components/SevenComponentLayout";
import EightComponentLayout from "./components/EightComponentLayout";
import NineComponentLayout from "./components/NineComponentLayout";
import TenComponentLayout from "./components/TenComponentLayout";
import LocationBlock from "./components/LocationBlock";
import Footer from "./components/Footer";
import styles from "./components/MainComponent/main.module.css";
import circle from "./components/MainComponent/img/circle.svg";
import circle_2 from "./components/MainComponent/img/circle2.svg";
import React from "react";
import {Link} from 'react-scroll'


function App() {
  return (
    <div>
        <div className={styles['container']}>
            <img src={circle} className={styles['hu-oval-2']} alt={'circle'}/>
            <div className={styles['hero-container-new']}>
                <div className={styles['hero-text-wrap']}>
                    <h1>Разработка игр на&nbsp;Unity</h1>
                    <p className={styles["hero-p"]}>Под руководством опытного преподавателя ученики создадут 3D-игру: разработают
                        сюжет, дизайн и механику.</p>
                    <div className={styles['links-wrap']}>
                        <button className={styles['hero-btn-new']}>
                            <Link smooth to='about'>Записаться</Link>
                        </button>
                    </div>
                </div>
                <img className={styles['circle_two']} alt={'circle'} src={circle_2}/>
            </div>
        </div>
      <EightComponentLayout/>
      <TwoComponentLayout/>
      <ThreeComponentLayout/>
      <FourComponentLayout/>
      <FiveComponentLayout/>
      <SevenComponentLayout/>
        <LocationBlock/>
        <section id={'about'}>
      <NineComponentLayout/>
        </section>
      <TenComponentLayout/>
        <Footer/>
    </div>
  );
}

export default App;
