import Image from 'next/image'
import styles from './page.module.css'
import logo from '../public/LOREDEV_LOGO.png'

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.welcome}>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Daniel Lorenzo
            </h1>
            <h2 className={styles.subtitle}>Desarrollador <span className={styles.colorText}>Java</span></h2>
          </div>
        </div>
      </section>
      <section className={styles.container}>
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
      </section>
    </>
  )
}
