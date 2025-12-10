import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { projects } from "../data/projects";
import Contact from "../components/Contact";
import resumeUrl from '../assets/Nishant-Rathore-SD2.pdf'
import ExperienceSection from "../components/ExperienceSection";
import { useSelector } from "react-redux";

export default function Home() {
    const theme = useSelector((state) => state.theme.currentTheme);
    console.log(theme)
    useEffect(() => {
        document.title = "Nishant Rathore | Portfolio";
    }, []);


    return (
        <div className={`${theme} w-full`}>
            <Navbar resumeUrl={resumeUrl} />
            <main>
                <Hero />
                <About />
                <ExperienceSection />
                <Skills />
                <Projects items={projects} />
                <Contact />
                <Footer />
            </main>
            <ScrollToTop />
        </div>
    );
}
