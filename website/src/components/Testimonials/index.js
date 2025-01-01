import React from 'react';
import styles from './Testimonials.module.css';
import Testimonial01 from './testimonial01.jpeg';
import Testimonial02 from './testinomial02.jpeg';
import Testimonial03 from './testimonial03.jpeg';
import Testimonial04 from './testimonial04.jpeg';
import Testimonial05 from './testimonial05.jpeg';
import Testimonial06 from './testimonial06.jpeg';

export default function Testimonials() {
  return (
    <section className={styles.testimonialsSection}>
      <div className="container">
        <h2 className={styles.testimonialsTitle}>
          Approved by <span className={styles.highlight}>professionals</span>
        </h2>
        
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img 
                src={Testimonial01} 
                alt="Profile"
                className={styles.testimonialAvatar}
              />
              <div className={styles.testimonialMeta}>
                <h3>Yaco Lioi</h3>
                <p>Cofundador in Corporate</p>
                <span className={styles.followers}>Yalm</span>
              </div>
            </div>
            <p className={styles.testimonialContent}>
              The best 3D software, it has it all. Blender became the one for all solution that is also the best compared to every competitor. Most of the media companies we consulted were using other software, or even software suites, that were replaced by Blender, gaining so much more productivity and better results.
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img 
                src={Testimonial02} 
                alt="Profile"
                className={styles.testimonialAvatar}
              />
              <div className={styles.testimonialMeta}>
                <h3>John Crumpton</h3>
                <p>Technical Director (CTO)</p>
                <span className={styles.followers}>Doublesided</span>
              </div>
            </div>
            <p className={styles.testimonialContent}>
              Free tool to create elements for website design. At our web design agency, we use Blender to create 3D objects for our website designs. We have been learning how to use it so that we can incorporate three.js into our designs, allowing us to create more engaging and interactive experiences for users. Blender helps us address a number of business problems such as creating more engaging visuals for our clients and is free too! The scope of our use case is to create 3D objects that can be used in website designs.
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img 
                src={Testimonial03} 
                alt="Profile"
                className={styles.testimonialAvatar}
              />
              <div className={styles.testimonialMeta}>
                <h3>Kèlene Poyurs</h3>
                <p>Co-Founder</p>
                <span className={styles.followers}>Conversion Queens</span>
              </div>
            </div>
            <p className={styles.testimonialContent}>
              The Future of 3D Made Easy. We use Blender in our marketing agency to create product launch images, 3D animations for the beginnings of Youtube and Tiktok videos, as well as for the creation of any other product images our clients may need. Occasionally we also use it for the creation of 3D logos and logo animations to present to clients.
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img 
                src={Testimonial04} 
                alt="Profile"
                className={styles.testimonialAvatar}
              />
              <div className={styles.testimonialMeta}>
                <h3>Arpad Szucs</h3>
                <p>UI, UX & Visual Designer</p>
                <span className={styles.followers}>WhiteX.Design</span>
              </div>
            </div>
            <p className={styles.testimonialContent}>
              Industry Standard 3D Modeling & Animation Software for FREE. Blender is a versatile and powerful 3D modeling and animation software that we use in a variety of projects. One of its main uses is for product visualization, where we create highly detailed and accurate models of products for marketing and advertising purposes. We also use it for interior design projects, where we create 3D models of rooms and spaces to help clients visualize the finished product. Recently, we have also started using Blender for advanced web design projects that involve creating 3D assets for interactive and immersive websites. Overall, Blender has proven to be a valuable tool for our business, allowing us to create professional and high-quality 3D content for a wide range of projects.
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img 
                src={Testimonial05} 
                alt="Profile"
                className={styles.testimonialAvatar}
              />
              <div className={styles.testimonialMeta}>
                <h3>Jitendra Choubisa</h3>
                <p>AR VR Content Developer</p>
                <span className={styles.followers}>Techno NJR</span>
              </div>
            </div>
            <p className={styles.testimonialContent}>
              Blender - An easy tool to start creating your dream 3d world with animations. We at Techno NJR believes in making students future ready by introducing them with the augmented and virtual reality applications. For creating a virtual environment we first need to make a 3d model and animations of it and then we take it into Unity or Unreal Engine to generate final environment with interactions. For creating various 3d models with animations, we were in need of a 3D Design software. Previously we were using Autodesk 3ds max, but due to its high requirement of processing power and high cost, we started looking for a faster and cheaper alternative and that's when BLENDER came into the picture.
            </p>
          </div>

          <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
              <img 
                src={Testimonial06} 
                alt="Profile"
                className={styles.testimonialAvatar}
              />
              <div className={styles.testimonialMeta}>
                <h3>Zeel Pandya</h3>
                <p>SAP ABAP Consultant</p>
                <span className={styles.followers}>AeonX Digital Solutions</span>
              </div>
            </div>
            <p className={styles.testimonialContent}>
              Blender is the best. Blender is free , open source 3D creation suite that has so many features that allows you to model animate, video editing and even simulate some projects during composition . I can say its is all in one package , It does supports Linux, Windows and Mac operating system . If you are looking for a free accessible complete set of tool to start 3D modeling, digital sculpting , I think Blender is the one for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 