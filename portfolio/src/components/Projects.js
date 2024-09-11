// src/components/Projects.js
import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "Project Quebic",
            description: "A 2D Metroidvania game currently in development with Xodic Studio.",
            technologies: ["Unity", "C#"],
            status: "In development - Version 0.6.0"
        },
        {
            title: "Lamalia Minecraft Server",
            description: "A vibrant Minecraft community supporting both Java and Bedrock editions (v1.20.x).",
            features: ["Land claiming", "Custom enchantments", "Dynamic economy", "Profession quests"],
            role: "Server Developer and Manager"
        }
    ];

    return (
        <section className="projects">
            <h2>My Projects</h2>
            {projects.map((project, index) => (
                <div key={index} className="project-card">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.technologies && (
                        <p>Technologies: {project.technologies.join(', ')}</p>
                    )}
                    {project.features && (
                        <ul>
                            {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                            ))}
                        </ul>
                    )}
                    {project.status && <p>Status: {project.status}</p>}
                    {project.role && <p>My Role: {project.role}</p>}
                </div>
            ))}
        </section>
    );
};

export default Projects;
