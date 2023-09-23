import Image from 'next/image'
import styles from './page.module.css'
import info from '../public/info.svg'
import productos from '../public/productos.svg'
import contacto from '../public/phone.svg'
import logo from '../public/LOREDEV (1).png'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.welcome}>
          <h1 className={styles.title}>
            LoreDev
          </h1>
          <Image className={styles.logo} src={logo} width={220} height={220} alt='logo' />
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
        <div className={styles.responsiveInfo}>
          <Link href="/about" className={styles.cardR}>
            
            <Image src={info} width={50} height={50} alt='info' className={styles.iconsR} />
          </Link>
          <Link href="/products" className={styles.cardR}>
            
            <Image src={productos} width={50} height={50} alt='info' className={styles.iconsR} />
          </Link>
          <Link href="/contact" className={styles.cardR}>
            
            <Image src={contacto} width={50} height={50} alt='info' className={styles.iconsR} />
          </Link>
        </div>
      </section>
    </>
  )
}
