import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.heroTitles}>
        <h1 className={styles.heroTitle}>Find the university that's right for you.</h1>
        <h3 className={styles.heroSubtitle}>Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</h3>
      </div>
      <img className={styles.heroImage} src="ellipse-1.png" alt="Caspar David Fried on a mountain" />
    </div>
  );
}

export default HeroSection;