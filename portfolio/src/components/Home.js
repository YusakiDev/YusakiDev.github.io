// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated, config } from 'react-spring';
import '../styles/Home.css';

const Home = () => {
    const fadeIn = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1000 }
    });

    const slideUp = useSpring({
        transform: 'translateY(0)',
        from: { transform: 'translateY(50px)' },
        config: config.gentle
    });

    return (
        <animated.div style={fadeIn} className="home">
            <section className="hero">
                <animated.h1 style={slideUp}>Puree Pangma</animated.h1>
                <animated.h2 style={useSpring({ ...slideUp, delay: 300 })}>Game Developer & Creative Coder</animated.h2>
                <animated.p style={useSpring({ ...slideUp, delay: 600 })}>Crafting immersive digital experiences through code and creativity</animated.p>
                <animated.div style={useSpring({ ...slideUp, delay: 900 })}>
                    <Link to="/projects" className="cta-button">View My Projects</Link>
                </animated.div>
            </section>

            <animated.section style={useSpring({ ...slideUp, delay: 1200 })} className="quick-about">
                <h3>Who Am I?</h3>
                <p>I'm a passionate game developer from Thailand, currently studying Game Development at Bangkok University. My journey in the world of coding and game design is driven by a desire to create engaging, innovative experiences.</p>
                <Link to="/about" className="learn-more">Learn more about me</Link>
            </animated.section>

            <section className="featured-projects">
                <h3>Featured Projects</h3>
                <div className="project-cards">
                    <animated.div style={useSpring({ ...slideUp, delay: 1500 })} className="project-card">
                        <h4>Project Quebic</h4>
                        <p>A 2D Metroidvania game currently in development.</p>
                        <Link to="/projects" className="project-link">Learn More</Link>
                    </animated.div>
                    <animated.div style={useSpring({ ...slideUp, delay: 1800 })} className="project-card">
                        <h4>Lamalia Minecraft Server</h4>
                        <p>A vibrant Minecraft community with custom features.</p>
                        <Link to="/projects" className="project-link">Learn More</Link>
                    </animated.div>
                </div>
            </section>

            <animated.section style={useSpring({ ...slideUp, delay: 2100 })} className="skills-preview">
                <h3>My Toolkit</h3>
                <ul className="skills-list">
                    <li>Unity</li>
                    <li>C#</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Game Design</li>
                </ul>
                <Link to="/skills" className="learn-more">See all my skills</Link>
            </animated.section>
        </animated.div>
    );
};

export default Home;
