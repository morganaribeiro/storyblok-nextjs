import styles from "./tituloOfertas.module.css";
type Blok = {
  title: string;
  active: boolean;
};

type PropsTituloOfertas = {
  blok: Blok;
};

export const tituloOfertas = ({ blok }: PropsTituloOfertas) => {
  const { title } = blok; 

  return (
    <section className={styles.section}>
      <div 
        className={styles.title} 
        dangerouslySetInnerHTML={{ __html: title }}
      />
    </section>
  );
};

// tituloOfertas => title e subtitle (ambos podem ativar/desativar)