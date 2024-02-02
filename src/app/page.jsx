import Image from 'next/image';
import styles from './page.module.css';
import Hero from "public/hero.png";
import Button from "@/Components/Button/Button";

export default function Home(){
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
            Mejores diseños para tus productos digitales.
        </h1>
        <p className={styles.desc}>
          Cambiando ideas con la realidad. Traeremos a nuestro equipo en la mejor industria del software.
        </p>
        <Button url="/portafolio" text="Ver nuestros trabajos" />
      </div>
      <div className={styles.item}>
        <Image src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="" className={styles.img} width={800} height={500}
        />
      </div>
    </div>
  );
}

/*export default function Home() {
  return (
    <div>Home</div>
  )
}*/
