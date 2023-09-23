"use client"

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import { clearTimeout } from 'timers';

const About = () => {
  const nombre = 'Daniel Lorenzo';
  const carrera = 'Ingeniero en Computación';
  const universidad = 'Universidad Nacional Autónoma de México - Facultad de Estudios Superiores Aragón';
  const especializacion =
    'Tecnologías como Java, Spring Boot, JavaScript, Angular, React, React Native y MySQL';
  const experiencia =
    'He trabajado en interfaces de proyectos, en la lógica de las mismas, así como en creación y modificación de servicios en GETechnologies';
  const musica = 'Me gusta escuchar distintos géneros, desde Pop hasta Indie, pasando por Baladas y Soundtracks';
  const videojuegos = 'En mis juegos favoritos están Minecraft, Max Payne, Dead Space, Portal, entre muchos otros';

  const changingData = [
    { title: '¿Cuál es mi experiencia?', content: experiencia },
    { title: '¿Qué tecnologías sé manejar?', content: especializacion },
    { title: '¿Cuáles fueron mis estudios?', content: universidad },
    { title: '¿Qué música escucho?', content: musica },
    { title: '¿Qué videojuegos me gustan?', content: videojuegos },
  ];

  const [changingIndex, setChangingIndex] = useState(0);
  const [applyClass, setApplyClass] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isCurrentChanging, setIsCurrentChanging] = useState(true);

  const updateProgress = () => {
    const duration = 10000; // 5000 milisegundos (5 segundos)
    const interval = 100; // Actualiza cada 100 milisegundos
    const steps = duration / interval;
    let step = 0;

    const progressInterval = setInterval(() => {
      step += 1;
      const newProgress = (step / steps) * 100; // Calcula el progreso en porcentaje
      setProgress(newProgress);

      if (step >= steps) {
        clearInterval(progressInterval); // Detén el intervalo cuando se complete el progreso
      }
    }, interval);
  };


  useEffect(() => {
    updateProgress(); // Inicia el progreso
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      // Cambia al siguiente "changing"
      setApplyClass(true); // Aplica la clase cuando cambia
      setTimeout(() => {
        updateProgress();
        setChangingIndex((prevIndex) => (prevIndex + 1) % changingData.length);
        setApplyClass(false); // Quita la clase después de un tiempo (puedes ajustar el tiempo)
      }, 500); // Retraso para aplicar la clase y luego quitarla
    }, 10000); // 5000 milisegundos (5 segundos)
    return () => {
      // Limpia los intervalos cuando el componente se desmonta
      clearInterval(interval);
    };

  }, []);

  let setIndexChangingValue = (index: number) => {
    setChangingIndex(index);
    setIsCurrentChanging(false);
  }


  const currentChanging = changingData[changingIndex];

  return (
    <section className={styles.container}>
      <div className={styles.welcome}>
        <div className={styles.changing}>
          <h1 className={styles.title}>
            Soy <span className={styles.blue}>{nombre}</span>
          </h1>
          <h2 className={styles.subtitle}>
            <span className={styles.blue}>{carrera} </span>
            | | <span className={styles.blue}>Desarrollador Backend </span>
          </h2>
        </div>
      </div>
      <div className={styles.buttonsContainer}>
        <div className={styles.buttons}>
          <button className={changingIndex === 0 ? styles.buttonActive : ''} onClick={() => setIndexChangingValue(0)}>Estudios</button>
          <button className={changingIndex === 1 ? styles.buttonActive : ''} onClick={() => setIndexChangingValue(1)}>Tecnologías</button>
          <button className={changingIndex === 2 ? styles.buttonActive : ''} onClick={() => setIndexChangingValue(2)}>Experiencia</button>
          <button className={changingIndex === 3 ? styles.buttonActive : ''} onClick={() => setIndexChangingValue(3)}>Música</button>
          <button className={changingIndex === 4 ? styles.buttonActive : ''} onClick={() => setIndexChangingValue(4)}>Videojuegos</button>
        </div>
      </div>
      <div className={styles.welcome}>
        <div className={styles.changing}>
          <h1 className={`${styles.title} ${applyClass ? styles.another : styles.view}`}>
            <span className={styles.blue}>{currentChanging.title}</span> <br />
            {currentChanging.content}
          </h1>
        </div>
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        </div>
      </div>
    </section>
  );
};

export default About;
