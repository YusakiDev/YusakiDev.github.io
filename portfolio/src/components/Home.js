import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100); // Small delay to ensure components are mounted

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="home">
            <section className={`hero ${isVisible ? 'animate-fade-in' : 'hidden'}`}>
                <h1 className={`${isVisible ? 'animate-slide-up' : 'hidden'}`}>Puree Pangma</h1>
                <h2 className={`${isVisible ? 'animate-slide-up delay-1' : 'hidden'}`}>Game Developer & Creative Coder</h2>
                <p className={`${isVisible ? 'animate-slide-up delay-2' : 'hidden'}`}>Crafting immersive digital experiences through code and creativity</p>
                <div className={`${isVisible ? 'animate-slide-up delay-3' : 'hidden'}`}>
                    <Link to="/projects" className="cta-button">View My Projects</Link>
                </div>
            </section>

            <section className={`quick-about ${isVisible ? 'animate-fade-in delay-4' : 'hidden'}`}>
                <h3>Who Am I?</h3>
                <p>I'm a passionate game developer from Thailand, currently studying Game Development at Bangkok University. My journey in the world of coding and game design is driven by a desire to create engaging, innovative experiences.</p>
                <Link to="/about" className="learn-more">Learn more about me</Link>
            </section>

            <section className="featured-projects">
                <h3>Featured Projects</h3>
                <div className="project-cards">
                    <div className={`project-card ${isVisible ? 'animate-fade-in delay-5' : 'hidden'}`}>
                        <h4>Project Quebic</h4>
                        <p>A 2D Metroidvania game currently in development.</p>
                        <Link to="/projects" className="project-link">Learn More</Link>
                    </div>
                    <div className={`project-card ${isVisible ? 'animate-fade-in delay-6' : 'hidden'}`}>
                        <h4>Lamalia Minecraft Server</h4>
                        <p>A vibrant Minecraft community with custom features.</p>
                        <Link to="/projects" className="project-link">Learn More</Link>
                    </div>
                </div>
            </section>

            <section className={`skills-preview ${isVisible ? 'animate-fade-in delay-7' : 'hidden'}`}>
                <h3>My Toolkit</h3>
                <ul className="skills-list">
                    <li>Unity</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Game Design</li>
                </ul>
                <Link to="/skills" className="learn-more">See all my skills</Link>
            </section>
        </div>
    );
};

export default Home;
