"use client"
import Image from 'next/image'
import styles from './page.module.css'
import github from '../public/github.svg'
import contact from '../public/contact.svg'
import profile from '../public/profile.svg'
import experience from '../public/briefcase.svg'
import education from '../public/education.svg'
import games from '../public/games.svg'
import pet from '../public/pet.svg'
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
    }, { threshold: 0.3 });

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
        <div className={styles.separator}></div>
        <Image
          className={`${styles.icon} ${active === 5 ? styles.active : ''}`}
          src={pet}
          alt="pet"
          onClick={() => handleClick(5)}
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
            <span className={styles.titleJob}>
              ¿Qué hago en mi tiempo libre?
            </span>
            <span className={styles.position}>
              Videojuegos
            </span>
            <span className={styles.daily}>
              Me encanta jugar videojuegos, últimamente juego mucho en multijuagdor,
              específicamente Halo Infinite, aunque también juego otros juegos como
              Minecraft, Assassin's Creed, Dead Space, entre otros.
            </span>
            <br />
            <br />
            <span className={styles.position}>
              Programar
            </span>
            <span className={styles.daily}>
              Me gusta mucho programar y tengo un par de proyectos personales en los que
              trabajo de vez en cuando, eso sí, siempre cuidando no quemarme.
            </span>
            <br />
            <br />
            <span className={styles.position}>
              Música
            </span>
            <span className={styles.daily}>
              Me gusta mucho escuchar música, siempre que puedo tengo música de fondo,
              y de vez en cuando disfruto de practicar un poco de violín, aunque
              eso sí, no esperen más que un "Estrellita dónde estás" y aun así
              posiblemente desafine un poco.
            </span>
          </div>
        </div>
      </section>
      <section className={styles.container} id='section5'>
        <div className={styles.welcome}>
          <div className={styles.info}>
            <span className={styles.titleJob}>
              ¿Una sección para mis mascotas?
            </span>
            <span className={styles.daily}>
              Siempre que puedo me gusta pasar tiempo con mis mascotas,
              son parte de mí y mi familia.
            </span> <br />
            <span className={styles.titleJob}>
              Harry
            </span>
            <span className={styles.daily}>
              Harry es el típico perro mexicano mediano, blanco con pelo chino,
              nacido en el 2015, es muy encimoso, cariñoso y un poco
              consentido (mucho).
            </span>
            <br />
            <br />
            <span className={styles.titleJob}>
              Hachi
            </span>
            <span className={styles.daily}>
              Hachi es un husky siberiano, nacido en el 2018, es muy juguetón,
              cariñoso y sobre todo muy travieso, siempre está buscando algo
              que romper, así que necesita tener peluches al alcance.
            </span>
            <br />
            <br />
            <span className={styles.titleJob}>
              Kira
            </span>
            <span className={styles.daily}>
              Kira es una gata blanca con ojos azules, nacida en el 2020,
              tiene un caracter muy fuerte, es muy cariñosa y obediente.
            </span>
            <br />
            <br />
            <span className={styles.titleJob}>
              Nube
            </span>
            <span className={styles.daily}>
              Nube es una gata blanca con ojos azules, hermana de sangre
              de Kira, nacida en el 2020, es extremadamente cariñosa, 
              siempre acepta cariño y espera estar acompañada para cada
              parte de su día.
            </span>
            <br />
            <br />
            <span className={styles.titleJob}>
              Luna
            </span>
            <span className={styles.daily}>
              Luna es una gata tuxedo (vaquita), nacida aproximadamente
              a finales del 2020, es extremadamente juquetona, no le gusta 
              tanto el cariño, pero siempre que ve a alguien acostado
              se acerca a dormir con esa persona.
            </span>
            <br />
            <br />
            <span className={styles.titleJob}>
              Luz
            </span>
            <span className={styles.daily}>
              Luz era una gata doméstico europeo, nacida en el 2022,
              era una incréible combinación de cariño y energía, siempre
              estaba buscando jugar, sobre todo con su hermana Luna y 
              disfrutaba de dormir sobre mi espalda toda la noche.
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
