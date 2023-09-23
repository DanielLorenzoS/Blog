"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";
import React, { useState } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import logo from "../../public/loredev-bg-grey.png";

export default function Navbar() {

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setButtonClicked(!buttonClicked);
        if (!buttonClicked) {
            disableBodyScroll(document.body);
        } else {
            enableBodyScroll(document.body);
        }
    };

    return (
        <>
            <nav className={styles.nav}>
                <h1 className={styles["nav-h1"]}>
                    LoreDev</h1>
                <div className={styles.navs}>
                    <Link href="/">
                        <h2 className={styles["nav-h2"]}>Inicio</h2>
                    </Link>
                    <Link href="/about">
                        <h2 className={styles["nav-h2"]}>Sobre mí</h2>
                    </Link>
                    <Link href="/products">
                        <h2 className={styles["nav-h2"]}>Proyectos</h2>
                    </Link>
                    <Link href="/contact">
                        <h2 className={styles["nav-h2"]}>Contacto</h2>
                    </Link>
                </div>
                <button
                    className={
                        buttonClicked
                            ? `${styles["nav-res-button"]} ${styles["nav-res-button-clicked"]}`
                            : styles["nav-res-button"]
                    }
                    onClick={handleButtonClick}
                >
                    <div
                        className={
                            buttonClicked
                                ? `${styles.image} ${styles["image-clicked"]}`
                                : styles.image
                        }
                    ></div>
                    <div
                        className={
                            buttonClicked
                                ? `${styles.image2} ${styles["image2-clicked"]}`
                                : styles.image2
                        }
                    ></div>
                    <div
                        className={
                            buttonClicked
                                ? `${styles.image3} ${styles["image3-clicked"]}`
                                : styles.image3
                        }
                    ></div>
                </button>
                <div
                    className={
                        buttonClicked ? styles["nav-res-clicked"] : styles["nav-res"]
                    }
                    onClick={handleButtonClick}
                >
                    <Link href="/" className={styles.a}>
                        <h2 className={styles["nav-h2"]}>Inicio</h2>
                    </Link>
                    <Link href="/about" className={styles.a}>
                        <h2 className={styles["nav-h2"]}>Sobre mí</h2>
                    </Link>
                    <Link href="/products" className={styles.a}>
                        <h2 className={styles["nav-h2"]}>Proyectos</h2>
                    </Link>
                    <Link href="/contact" className={styles.a}>
                        <h2 className={styles["nav-h2"]}>Contacto</h2>
                    </Link>
                </div>
            </nav>

        </>
    )
}
