import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import room01Image from '@site/static/img/img-001.png';

import Heading from '@theme/Heading';
import styles from './index.module.css';

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

        <div className="pricing">
          <h2>$95</h2>
          <p>Access for life, VAT incl.</p>
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
    <Layout
      title={`${siteConfig.title}`}
      description="Intelligent Investors">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
