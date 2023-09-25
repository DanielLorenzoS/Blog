import styles from './page.module.css'
import Image from 'next/image'
import logo from '../../public/LOREDEV (1).png'
import linkedin from '../../public/linkedin.svg'
import whatsapp from '../../public/whatsapp.svg'
import github from '../../public/github.svg'

export default function Contact() {
    return (
        <>
            <div className={styles.container}>
                {/* <div className={styles.logoContainer}>
                    <Image src={logo} alt="Logo" />
                </div> */}
                <div className={styles.contactContainer}>
                    <h1 className={styles.title}>Contacto</h1>
                    <div className={styles.cssTyping}>
                        <p className={styles.p}> <strong>Teléfono:</strong> 5529153895</p>
                    </div>
                    <div className={styles.cssTyping}>
                        <p className={styles.p}> <strong>Correo electrónico:</strong> lorenzccaz@gmail.com </p>
                    </div>
                    <div className={styles.cssTyping}>
                        <p className={styles.p}> <strong>LinkedIn:</strong> https://www.linkedin.com/in/daniellorenzos/ </p>
                    </div>
                    <div className={styles.cssTyping}>
                        <p className={styles.p}> <strong>GitHub:</strong> https://github.com/DanielLorenzoS </p>
                    </div>
                    <div className={styles.icons}>
                        <a href="https://www.linkedin.com/in/daniellorenzos/" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedin} alt="Linkedin" />
                        </a>
                        <a href="https://wa.me/5529153895?text=Hola, me gustaría contactarte" target="_blank" rel="noopener noreferrer">
                            <Image src={whatsapp} alt="WhatsApp" />
                        </a>
                        <a href="https://github.com/DanielLorenzoS" target="_blank" rel="noopener noreferrer">
                            <Image src={github} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}