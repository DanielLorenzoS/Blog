import Image from 'next/image'
import styles from './page.module.css'
import info from '../public/info.svg'
import productos from '../public/productos.svg'
import contacto from '../public/phone.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.welcome}>
          <h1 className={styles.title}>
            Bienvenid@ a <span className={styles.blue}>LoreDev</span>
          </h1>
          <h2 className={styles.subtitle}>
          ¿List@ para dar vida a tu <span className={styles.blue}>proyecto</span> en línea?
          </h2>
        </div>
        <div className={styles.info}>
          <Link href="/about" className={styles.card}>
            Acerca de mí
            <Image src={info} width={50} height={50} alt='info' className={styles.icons} />
          </Link>
          <Link href="/products" className={styles.card}>
            Proyectos
            <Image src={productos} width={50} height={50} alt='info' className={styles.icons} />
          </Link>
          <Link href="/contact" className={styles.card}>
            Contacto
            <Image src={contacto} width={50} height={50} alt='info' className={styles.icons} />
          </Link>
        </div>
      </section>
    </>
  )
}
