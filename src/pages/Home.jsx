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
import ThemeSelector from "../components/ThemeSelector";

export default function Home() {
    const theme = useSelector((state) => state.theme.activeTheme);
    console.log(theme)
    useEffect(() => {
        document.title = "Nishant Rathore | Portfolio";
    }, []);


    return (
        <div className={`${theme} w-full transition-colors duration-300`}>
            <Navbar resumeUrl={resumeUrl} />
            {/* === THEME SELECTOR === */}
            <div className="fixed left-5 bottom-5 z-50">
                <ThemeSelector />
            </div>
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
