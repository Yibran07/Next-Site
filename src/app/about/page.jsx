import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/Components/Button/Button";

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Software y Salud</h1>
                    <h2 className={styles.imgDesc}>
                        Pequeños pasos para grandes proyectos.
                    </h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>¿Qué hacemos nosotros?</h1>
                    <p className={styles.desc}>
                        Una empresa de desarollo de software con 34 años
                        <br />
                        <br />
                        Nuestros expertos ayudan a las empresas medianas
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>¿Qué hacemos?</h1>
                    <p className={styles.desc}>
                        Hemos establecido y seguimos rigurosamente un progreso
                        <br />
                        <br /> - Sitios web dinámicos
                        <br />
                        <br /> - Rápido y amigable
                        <br />
                        <br /> - Aplivaciones móviles
                    </p>
                    <Button url="/contact" text="Contact"/>
                </div>
            </div>
        </div>
    )
}

export default About;