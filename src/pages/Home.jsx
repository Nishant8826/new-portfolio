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

export default function Home() {
    useEffect(() => {
        document.title = "Nishant Rathore | Portfolio";
    }, []);


    return (
        <div className="min-h-screen font-inter text-slate-800 bg-gradient-to-b from-white to-indigo-50">
            <Navbar resumeUrl={resumeUrl} />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects items={projects} />
                <Contact />
                <Footer />
            </main>
            <ScrollToTop />
        </div>
    );
}
