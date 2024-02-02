import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

const Portafolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>Seleccionar una galeria</h1>
            <div className={styles.items}>
                <Link href="/portafolio/illustrations" className={styles.item}>
                    <span className={styles.title}>Ilustraciones</span>
                </Link>
                <Link href="/portafolio/websites" className={styles.item}>
                    <span className={styles.title}>Sitios Web</span>
                </Link>
                <Link href="/portafolio/applications" className={styles.item}>
                    <span className={styles.title}>Aplicaciones</span>
                </Link>
            </div>
        </div>
    );
};

export default Portafolio;