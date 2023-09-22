"use client"

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';

const About = () => {
  const nombre = 'Daniel Lorenzo';
  const carrera = 'Ingeniería en Computación';
  const universidad = 'Universidad Nacional Autónoma de México - Facultad de Estudios Superiores Aragón';
  const especializacion =
    'Tecnologías como Java, Spring Boot, JavaScript, Angular, React, React Native y MySQL';
  const pasatiempos =
    'Me gusta desarrollar software de distintos tipos, desde aplicaciones móviles hasta aplicaciones web, pasando por aplicaciones de inteligencia artificial hasta videojuegos';
  const musica = 'Me gusta escuchar distintos géneros, desde Pop hasta Indie, pasando por Baladas y Soundtracks';
  const videojuegos = 'En mis juegos favoritos están Minecraft, Max Payne, Dead Space, Portal, entre muchos otros';

  const changingData = [
    { title: '¿Dónde estudio?', content: universidad },
    { title: '¿Qué tecnologías sé manejar?', content: especializacion },
    { title: '¿Qué desarrollo?', content: pasatiempos },
    { title: '¿Qué música escucho?', content: musica },
    { title: '¿Qué videojuegos me gustan?', content: videojuegos },
  ];

  const [changingIndex, setChangingIndex] = useState(0);
  const [applyClass, setApplyClass] = useState(false);
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    const duration = 5000; // 5000 milisegundos (5 segundos)
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
        updateProgress(); // Inicia el progreso
        setChangingIndex((prevIndex) => (prevIndex + 1) % changingData.length);
        setApplyClass(false); // Quita la clase después de un tiempo (puedes ajustar el tiempo)
      }, 500); // Retraso para aplicar la clase y luego quitarla
    }, 5000); // 5000 milisegundos (5 segundos)

    return () => {
      // Limpia los intervalos cuando el componente se desmonta
      clearInterval(interval);
    };
  }, []);


  const currentChanging = changingData[changingIndex];

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1 className={styles.title}>
          Soy <span className={styles.blue}>{nombre}</span>
        </h1>
        <h2 className={styles.subtitle}>
          Estudiante de <span className={styles.blue}>{carrera} </span>
          especializado en <span className={styles.blue}>Desarrollo de Software </span> {especializacion}.
        </h2>
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
    </div>
  );
};

export default About;
