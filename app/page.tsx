"use client"
import Image from 'next/image'
import styles from './page.module.css'
import github from '../public/github.svg'
import contact from '../public/contact.svg'
import profile from '../public/profile.svg'
import experience from '../public/briefcase.svg'
import education from '../public/education.svg'
import games from '../public/games.svg'
import React, { useEffect, useState } from 'react'

export default function Home() {
  const [active, setActive] = useState(1);

  const handleClick = (index: number) => {
    setActive(index);
    const section = document.getElementById(`section${index}`);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const index = parseInt(id.replace('section', ''));
          setActive(index);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <>
      <div className={styles.floating}>
        <Image
          className={`${styles.icon} ${active === 1 ? styles.active : ''}`}
          src={profile}
          alt="profile"
          onClick={() => handleClick(1)}
        />
        <div className={styles.separator}></div>
        <Image
          className={`${styles.icon} ${active === 2 ? styles.active : ''}`}
          src={experience}
          alt="experience"
          onClick={() => handleClick(2)}
        />
        <div className={styles.separator}></div>
        <Image
          className={`${styles.icon} ${active === 3 ? styles.active : ''}`}
          src={education}
          alt="education"
          onClick={() => handleClick(3)}
        />
        <div className={styles.separator}></div>
        <Image
          className={`${styles.icon} ${active === 4 ? styles.active : ''}`}
          src={games}
          alt="games"
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
              Soy Desarrollador Backend especializado en Java con más de 2 años de experiencia,
              aunque de vez en cuando desarrollo un poco de Frontend ya sea por trabajo así como
              para proyectos personales, disfruto mucho el diseño y la experiencia de usuario.
              Actualmente me estoy enfocando en aprender cosas más allá del código, como
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
              ¿En dónde he trabajado?
            </span>
            <br /> <br />
            <span className={styles.titleJob}>
              GETechnologies
            </span>
            <span className={styles.position}>
              Becario Java | 2022 - 2023
            </span>
            <span className={styles.daily}>
              En este trabajo di mis primeros pasos en el mundo laboral,
              aprendiendo mucho sobre el desarrollo de software,
              tanto en el backend como en el frontend, aprendiendo
              también a trabajar en equipo y a seguir buenas prácticas de
              programación.
            </span>
            <div className={styles.tecnologies}>
              <span className={styles.tecBack}>Spring Boot</span>
              <span className={styles.tecBack}>Quarkus</span>
              <span className={styles.tecDatabase}>MySQL</span>
              <span className={styles.tecFront}>Angular</span>
              <span className={styles.tecFront}>React Native</span>
              <span className={styles.tecFront}>Ionic</span>
            </div>
            <br />
            <br />
            <span className={styles.titleJob}>
              SEP - Secretaría de Educación Pública
            </span>
            <span className={styles.position}>
              Desarrollador Java | 2023 - Actualidad
            </span>
            <span className={styles.daily}>
              En este trabajo he aprendido tanto desarrollo de software, como
              otras habilidades muy importantes para mi carrera, como la
              arquitectura de software, la comunicación con los clientes y los
              requerimientos de los proyectos.
            </span>
            <div className={styles.tecnologies}>
              <span className={styles.tecBack}>Spring Boot</span>
              <span className={styles.tecBack}>Jasper Reports</span>
              <span className={styles.tecBack}>MyBatis</span>
              <span className={styles.tecDatabase}>Oracle</span>
              <span className={styles.tecFront}>Angular</span>
            </div>
            <br />
            <br />
            <span className={styles.titleJob}>
              BHIT - Black Hole Information Technologies
            </span>
            <span className={styles.position}>
              Desarrollador FullStack | Por periodos
            </span>
            <span className={styles.daily}>
              De manera paralela a mi trabajo en la SEP, he trabajado en
              proyectos de desarrollo de software para BHIT, en donde he
              aprendido diferentes maneras de trabajar y conocer nuevas
              perspectivas orientadas a los clientes.
            </span>
            <div className={styles.tecnologies}>
              <span className={styles.tecFront}>Angular</span>
              <span className={styles.tecFront}>Electron</span>
              <span className={styles.tecDatabase}>PouchDB</span>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.container} id='section3'>
        <div className={styles.welcome}>
          <div className={styles.info}>
          <span className={styles.titleJob}>
              Facultad de Estudios Superiores Aragón (UNAM)
            </span>
            <span className={styles.position}>
              Ingeniería en Computación | 2019 - 2023
            </span>
            <span className={styles.daily}>
              En mi carrera aprendí cosas muy importantes para el desarrollo de software,
              como estructuras de datos, algoritmos, programación orientada a objetos,
              bases de datos, entre otras cosas materias como robótica, arduino, etc. 
              Aprendí a trabajar en equipo y a seguir buenas prácticas de programación, 
              así como nunca dejar de aprender. Sin embargo, por cuestiones económicas, 
              no la pude concluir, terminando hasta finales de séptimo semestre.
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
              Soy Desarrollador Backend especializado en Java, aunque de vez en cuando
              me gusta desarrollar un poco de Frontend, disfruto mucho el diseño
              Actualmente me estoy enfocando en aprender cosas más allá del código, como
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
