import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/Components/Button/Button";

export const metadata = {
    title: "Developer Group Innovation",
    descripcion: "This is contact Page",
};

const Contact = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Contacto</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/helpDesk.png"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
                <form className={styles.form}>
                    <input type="text" placeholder="nombre" className={styles.input}/>
                    <input type="text" placeholder="correo electronico" className={styles.input}/>
                    <textarea
                        className={styles.image}
                        placeholder="mensaje"
                        cols="30"
                        rows="10"
                    >
                    </textarea>
                    <Button url="#" text="Enviar"/>
                </form>
            </div>
        </div>
    );
};

export default Contact;