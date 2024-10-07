import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { styles } from "../styles";
import { useEffect, useRef } from "react";
import * as THREE from 'three';

const Hero = () => {
  const mountRef = useRef(null); // Use a ref on the canvas directly

  useEffect(() => {
    AOS.init({
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1500);
    const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: mountRef.current }); // Bind the ref to canvas element
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create stars
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const positions = [];
    for (let i = 0; i < starCount; i++) {
      positions.push(
        (Math.random() - 0.5) * 2000,
        (Math.random() - 0.5) * 2000,
        -Math.random() * 2000
      );
    }
    starsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 10,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      alphaTest:0.5
    });

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.x += 0.001;
      stars.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <canvas ref={mountRef} className="absolute inset-0 z-0" /> {/* Use canvas element for Three.js */}
      
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto z-10 flex flex-row items-start gap-5">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
          <div className="w-5 h-5 rounded-full bg-white" />
        </div>

        <div>
          <h1
            data-aos="fade-up"
            className={`${styles.heroHeadText} text-white`}
          >
            Hi, I'm <span className="text-[#915EFF]">Ugochukwu</span>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            I develop websites, user <br className="sm:block hidden" />
            interfaces, bots, mobile, and web applications.
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#915EFF] flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-white-100 mb-1 opacity-50"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
