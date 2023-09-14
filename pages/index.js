import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import AboutMe from "../components/AboutMe/AboutMe";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Skills from "../components/Skills/Skills";
import Experience from "../components/Experience/Experience";
import Project from "../components/Projects/Project";
import Contact from "../components/Contact/Contact.jsx";
import Footer from "../components/Footer/Footer";
import UnderDev from "../components/UnderDev/UnderDev";
export default function Home() {
  useEffect(() => {
    AOS.init({

    });
    window.addEventListener("load", AOS.refresh);
  }, []);
  return (
    <div>
      <Head>
        <title>Animesh Kumar Singh</title>

        <meta
          name="description"
          content="Hello I am Animesh kumar Singh, Final Year Student from IIT Jodhpur, who likes to code. Currently a Mechanical Engineering Student and a hobbingly web developer known with many techs."
        />
        <meta
          name="keywords"
          content="Web Developer,Python,Django,JavaScript,Animesh Kumar Singh"
        />
        <meta name="author" content="Animesh Kumar Singh" />
        <meta property="og:title" content="Animesh Kumar Singh" />
        <meta
          property="og:description"
          content="Hello I am Animesh kumar Singh, Final Year Student from IIT Jodhpur, who likes to code. Currently a Mechanical Engineering Student and a hobbingly web developer known with many techs."
        />
        <meta
          property="og:url"
        />
        <meta property="og:type" content="website" />
        <meta name="google-site-verification" content="e2Wfce0nZjn2ET-p0yZXz_vLxX4gaP6V4jq1viJkWUM" />
        <meta property="og:site_name" content="Animesh Kumar Singh" />
        <meta property="og:locale" content="en_US" />
        <meta itemProp="name" content="Animesh Kumar Singh" />
        <meta
          itemProp="description"
          content="Hello I am Animesh kumar Singh, Final Year Student from IIT Jodhpur, who likes to code. Currently a Mechanical Engineering Student and a hobbingly web developer known with many techs."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero />
      <AboutMe />
      {/* <Skills /> */}
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
