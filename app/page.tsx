"use client"
import Image from 'next/image'
import styles from './page.module.css'
import github from '../public/github.svg'
import linkedin from '../public/linkedin.svg'
import React from 'react'

export default function Home() {

  const [active, setActive] = React.useState(1);

  const handleClick = (index: number) => {
    setActive(index);
  };

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
      <section className={styles.container}>
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
      {/* <section className={styles.container}>
        <div className={styles.text}>
          <p>Soy especialista en desarrollo con Java y JavaScript,
            con más de dos años de experiencia en el desarrollo de aplicaciones web, móviles y de escritorio.
          </p>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.text}>
          <p className={styles.answer}>¿Qué herramientas sé utilizar?</p>
          <ul className={styles.list}>
            <li>Java con Spring Boot</li>
            <li>JavaScript con Angular, React, React Native y Ionic</li>
            <li>Jasper Reports</li>
            <li>MySQL y Oracle</li>
          </ul>
        </div>
      </section>
      <section className={styles.container}>
        <div className={styles.text}>
          <p className={styles.answer}>¿Qué experiencia tengo?</p>
          <div className={styles.job}>
            <p className={styles.title}>Becario Desarrollador Java</p>
            <p className={styles.subtitle}>
              Trabajé en <span className={styles.colorText}>GETechnologies</span> como becario,
              donde realicé tareas de mantenimiento y desarrollo de nuevas funcionalidades en aplicaciones web (Spring Boot y Quarkus), y móviles
              (React Native y Ionic).
            </p>
          </div>
          <div className={styles.job}>
            <p className={styles.title}>Desarrollador Java</p>
            <p className={styles.subtitle}>
              Actualmente trabajo en la <span className={styles.colorText}>Secretaría de Educación Pública</span> como desarrollador Java,
              en el que doy mantenimiento y creo módulos según los nuevos requerimientos de la institución.
            </p>
          </div>
          <div className={styles.job}>
            <p className={styles.title}>Desarrollador independiente</p>
            <p className={styles.subtitle}>
              Actualmente trabajo en varios proyectos de manera paralela, tanto personales como de clientes temporales.
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.container} ${styles.none}`}>
        <div className={styles.text}>
          <p className={styles.answer}>¿Dónde estudié?</p>
          <div className={styles.job}>
            <p className={styles.study}>
              Estudié parcialmente la carrera de Ingeniería en Computación en la
              <span className={styles.colorText}> Facultad de Estudios Superiores Aragón</span>
            </p>
          </div>
        </div>
      </section> */}
    </>
  )
}
