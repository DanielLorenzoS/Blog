"use client";

import styles from './styles.module.css';
import info from '../../public/admin.png';
import contact from '../../public/coffee.png';
import Image from 'next/image';
import React, { useState } from 'react';

const Products = () => {

  const [selectedOption, setSelectedOption] = useState('admin'); // Valor por defecto

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
  };

  return (
    <>
    <section className={styles.container}>
        <ul className={styles.text}>
          <li className={`${styles.h1} ${selectedOption === 'admin' ? styles.textSelected : ''}`}
          onClick={() => handleOptionClick('admin')}>Sistema administrativo para Veterinaria </li>
          <li className={`${styles.h1} ${selectedOption === 'landing' ? styles.textSelected : ''}`}
          onClick={() => handleOptionClick('landing')}>Landing Page para tu Empresa </li>
        </ul>
        <div className={styles.imageContainer}>
          <div
            className={`${styles.image} ${selectedOption === 'admin' ? styles.selected : ''}`} >
            <Image src={info} width={500} height={500} alt="products" />
          </div>
          <div
            className={`${styles.image} ${selectedOption === 'landing' ? styles.selected : ''}`} >
            <Image src={contact} width={500} height={500} alt="products" />
          </div>
        </div>
      </section>     
    </>
  )
}

export default Products