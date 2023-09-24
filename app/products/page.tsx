"use client";
import styles from './styles.module.css';
import starFilled from '../../public/star-filled.svg';
import Image from 'next/image';
import React, { useState } from 'react';

const Products = () => {
  const [selectedOption, setSelectedOption] = useState('admin');

  const options = [
    {
      id: 'admin',
      title: 'Sistema administrativo para Veterinarias',
      description: 'Es un sistema enfocado a la administración de veterinarias',
      technologies: 'Java, Spring Boot, MySQL, JavaScript, Angular, Material UI',
      url: 'https://petadmin.loredev.com.mx/',
      difficultyStars: 5,
    },
    {
      id: 'finalPokeAPI',
      title: 'PokeAPI con Base de datos',
      description: 'PokeAPI con Base de datos, con login, registro, autentificación y autorización (base de datos inabilitada)',
      technologies: 'Angular, Spring Boot, Spring Security, MySQL',
      url: 'https://pokedex-ang.vercel.app/',
      difficultyStars: 4,
    },
    {
      id: 'firstPortfolio',
      title: 'Primer portafolio',
      description: 'Fue mi primer portafolio creado en 2022',
      technologies: 'HTML, CSS y JavaScript',
      url: 'https://lorecode.netlify.app/',
      difficultyStars: 2,
    },
    {
      id: 'firstPokeAPI',
      title: 'Primer proyecto PokeAPI',
      description: 'Primer proyecto PokeAPI',
      technologies: 'React.js',
      url: 'https://lorecode.netlify.app/',
      difficultyStars: 2,
    },
    {
      id: 'firstCRUD',
      title: 'Primer CRUD Star Wars',
      description: 'Primer CRUD Star Wars',
      technologies: 'HTML, CSS y JavaScript',
      url: 'https://starwarscrud.netlify.app/',
      difficultyStars: 3,
    },
    {
      id: 'plantillaVet',
      title: 'Plantilla veterinaria',
      description: 'Landing Page creada para veterinarias',
      technologies: 'HTML, CSS y JavaScript',
      url: 'https://petv.netlify.app/',
      difficultyStars: 1,
    }
  ];

  const handleOptionClick = (optionId: any) => {
    setSelectedOption(optionId);
  };

  const selectedOptionData = options.find((option) => option.id === selectedOption);

  return (
    <section className={styles.container}>
      <ul className={styles.text}>
        {options.map((option) => (
          <li
            key={option.id}
            className={`${styles.h1} ${selectedOption === option.id ? styles.textSelected : ''}`}
            onClick={() => handleOptionClick(option.id)}
          >
            {option.title}
          </li>
        ))}
      </ul>
      <div className={styles.selectContainer}>
        <label htmlFor="options">Selecciona una opción:</label>
        <select
          className={styles.select}
          id="options"
          value={selectedOption}
          onChange={(e) => handleOptionClick(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.id} value={option.id} className={styles.option}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.imageContainer}>
        <div className={`${styles.image} ${selectedOption === selectedOptionData?.id ? styles.selected : ''}`}>
          <div className={styles.infoContainer}>
            <h3 className={styles.blue}>¿Qué es?</h3>
            <h4 className={styles.txt}>{selectedOptionData?.description}</h4>
            <h3 className={styles.blue}>¿Qué tecnologías se utilizaron?</h3>
            <h4 className={styles.txt}>{selectedOptionData?.technologies}</h4>
            <h3 className={styles.blue}>URL</h3>
            <h4 className={styles.txt} onClick={() => window.open(selectedOptionData?.url)}>
              <span>{selectedOptionData?.url}</span>
            </h4>
            <h3 className={styles.blue}>Dificultad</h3>
            <h4 className={styles.txt}>
              {[...Array(selectedOptionData?.difficultyStars)].map((_, index) => (
                <Image key={index} src={starFilled} alt="star" width={20} height={20} />
              ))}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
