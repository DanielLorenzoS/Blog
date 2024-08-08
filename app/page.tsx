"use client"
import Image from 'next/image'
import styles from './page.module.css'
import github from '../public/github.svg'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [active, setActive] = useState(1);

  const handleClick = (index: number) => {
    setActive(index);
    const section = document.getElementById(`section${index}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0 && active < 4) {
        // Scroll hacia abajo
        handleClick(active + 1);
      } else if (e.deltaY < 0 && active > 1) {
        // Scroll hacia arriba
        handleClick(active - 1);
      }
    };

    const handleTouch = () => {
      let startY = 0;
      let endY = 0;

      const touchStart = (e: TouchEvent) => {
        startY = e.touches[0].clientY;
      };

      const touchMove = (e: TouchEvent) => {
        endY = e.touches[0].clientY;
      };

      const touchEnd = () => {
        if (startY > endY && active < 4) {
          // Desliza hacia arriba, scroll hacia abajo
          handleClick(active + 1);
        } else if (startY < endY && active > 1) {
          // Desliza hacia abajo, scroll hacia arriba
          handleClick(active - 1);
        }
      };

      window.addEventListener('touchstart', touchStart);
      window.addEventListener('touchmove', touchMove);
      window.addEventListener('touchend', touchEnd);

      return () => {
        window.removeEventListener('touchstart', touchStart);
        window.removeEventListener('touchmove', touchMove);
        window.removeEventListener('touchend', touchEnd);
      };
    };

    window.addEventListener('wheel', handleScroll);
    handleTouch();

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [active]);

  return (
    <>
      <div className={styles.floating}>
        <Image
          className={`${styles.icon} ${active === 1 ? styles.active : ''}`}
          src={github}
          alt="github"
          onClick={() => handleClick(1)}
        />
        <div className={styles.separator}></div>
        <Image
          className={`${styles.icon} ${active === 2 ? styles.active : ''}`}
          src={github}
          alt="github"
          onClick={() => handleClick(2)}
        />
        <div className={styles.separator}></div>
        <Image
          className={`${styles.icon} ${active === 3 ? styles.active : ''}`}
          src={github}
          alt="github"
          onClick={() => handleClick(3)}
        />
        <div className={styles.separator}></div>
        <Image
          className={`${styles.icon} ${active === 4 ? styles.active : ''}`}
          src={github}
          alt="github"
          onClick={() => handleClick(4)}
        />
      </div>
      <section className={styles.container} id='section1'>
        <div className={styles.welcome}>
          <div className={styles.info}>
            <span className={styles.detail}>
              ¿Qué tal?, soy
            </span>
            <br />
            <span className={styles.name}>
              Daniel Lorenzo
            </span>
            <br />
            <span className={styles.profession}>
              Me gusta crear y romper código
            </span>
            <span className={styles.daily}>
              Soy Desarrollador Backend especializado en Java, aunque de vez en cuando <br />
              me gusta desarrollar un poco de Frontend, disfruto mucho el diseño <br />
              Actualmente me estoy enfocando en aprender cosas más allá del código, como <br />
              la gestión de proyectos, requerimientos y arquitectura de software.
            </span>
            <br />
            <br />
          </div>
        </div>
      </section>
      <section className={styles.container} id='section2'>
        <div className={styles.welcome}>
          <div className={styles.info}>
            <span className={styles.detail}>
              ¿Qué tal?, soy
            </span>
            <br />
            <span className={styles.name}>
              Daniel Lorenzo
            </span>
            <br />
            <span className={styles.profession}>
              Me gusta crear y romper código
            </span>
            <span className={styles.daily}>
              Soy Desarrollador Backend especializado en Java, aunque de vez en cuando <br />
              me gusta desarrollar un poco de Frontend, disfruto mucho el diseño <br />
              Actualmente me estoy enfocando en aprender cosas más allá del código, como <br />
              la gestión de proyectos, requerimientos y arquitectura de software.
            </span>
            <br />
            <br />
          </div>
        </div>
      </section>
      <section className={styles.container} id='section3'>
        <div className={styles.welcome}>
          <div className={styles.info}>
            <span className={styles.detail}>
              ¿Qué tal?, soy
            </span>
            <br />
            <span className={styles.name}>
              Daniel Lorenzo
            </span>
            <br />
            <span className={styles.profession}>
              Me gusta crear y romper código
            </span>
            <span className={styles.daily}>
              Soy Desarrollador Backend especializado en Java, aunque de vez en cuando <br />
              me gusta desarrollar un poco de Frontend, disfruto mucho el diseño <br />
              Actualmente me estoy enfocando en aprender cosas más allá del código, como <br />
              la gestión de proyectos, requerimientos y arquitectura de software.
            </span>
            <br />
            <br />
          </div>
        </div>
      </section>
      <section className={styles.container} id='section4'>
        <div className={styles.welcome}>
          <div className={styles.info}>
            <span className={styles.detail}>
              ¿Qué tal?, soy
            </span>
            <br />
            <span className={styles.name}>
              Daniel Lorenzo
            </span>
            <br />
            <span className={styles.profession}>
              Me gusta crear y romper código
            </span>
            <span className={styles.daily}>
              Soy Desarrollador Backend especializado en Java, aunque de vez en cuando <br />
              me gusta desarrollar un poco de Frontend, disfruto mucho el diseño <br />
              Actualmente me estoy enfocando en aprender cosas más allá del código, como <br />
              la gestión de proyectos, requerimientos y arquitectura de software.
            </span>
            <br />
            <br />
          </div>
        </div>
      </section>
    </>
  )
}
