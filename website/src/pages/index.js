import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import room01Image from '@site/static/img/img-001.png';
import Benefit01 from '@site/static/img/index/benefit01.svg';
import Benefit02 from '@site/static/img/index/benefit02.svg';
import Benefit03 from '@site/static/img/index/benefit03.svg';
import Benefit04 from '@site/static/img/index/benefit04.svg';
import previewVideo from '@site/static/videos/preview.mp4';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import Testimonials from '@site/src/components/Testimonials';

function HeroSlogan() {
  return (
    <div className="container">
      <Heading as="h1" className="hero__title">
        Master The Art Blend
      </Heading>
      <p className="hero__subtitle">
        Everything you need in one place:
      </p>
      
      <div className="hero__details">
        <p>93 hours of video to go from absolute beginner to advanced Three.js developer.</p>
        
        <div className="stats">
          <div className="students">
            <span className="number">43,266</span> Students already enrolled
          </div>
          <div className="rating">
            ★★★★★ on Trustpilot
          </div>
        </div>
        
        <div className={styles.mediaSection}>
          <div className={styles.video}>
            <video 
              className="js-video-autoplay"
              src={previewVideo} 
              muted 
              autoPlay 
              loop 
              playsInline 
              controls
            />
          </div>

          <div className={styles.pricing}>
            <h2>$95</h2>
            <p>Access for life, VAT incl.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroGallery() {
  return (
    <div className="container">
      <div className={styles['hero-image']}>
        <img 
          src={room01Image} 
          alt="3D visualization of a learning space with computer setup" 
          className={styles['room-visualization']}
        />
      </div>

      <div className={styles['gallery-nav']}>
        <button className="gallery-btn prev" aria-label="Previous slide">
          <span>←</span>
        </button>
        <button className="gallery-btn home" aria-label="Home">
          <span>🏠</span>
        </button>
        <button className="gallery-btn next" aria-label="Next slide">
          <span>→</span>
        </button>
      </div>
    </div>
  );
}

function CareerBenefits() {
  return (
    <div>
      <div className={styles.careerSection}>
        <h2 className={styles.careerTitle}>
          Elevate Your Creativity with Blender
        </h2>
        <p className={styles.careerSubtitle}>
          Unlock your creative potential and bring your 3D visions to life.
        </p>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>
              <Benefit01 width={100} height={100} />
            </div>
            <h3><strong>Discover the Joy of 3D Creation</strong></h3>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>  
              <Benefit02 width={100} height={100} />
            </div>
            <h3><strong>Shine in the 3D Design Field</strong></h3>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>  
              <Benefit03 width={100} height={100} />
            </div>
            <h3><strong>Expand Your Career Opportunities</strong></h3>
          </div>
          
          <div className={styles.benefitItem}>
            <div className={styles.benefitIcon}>  
              <Benefit04 width={100} height={100} />
            </div>
            <h3><strong>Turn Creativity into Income</strong></h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <HeroSlogan />
      <HeroGallery />
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`}>
      <HomepageHeader />
      <CareerBenefits />
      <Testimonials />
    </Layout>
  );
}
