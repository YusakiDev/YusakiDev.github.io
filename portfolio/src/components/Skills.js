// src/components/Skills.js
import React from 'react';

const Skills = () => {
    const skills = [
        { name: "Game Development", level: 80 },
        { name: "Unity", level: 75 },
        { name: "C#", level: 70 },
        { name: "JavaScript", level: 65 },
        { name: "React", level: 60 },
        { name: "Project Management", level: 70 },
        { name: "Minecraft Server Management", level: 85 }
    ];

    return (
        <section className="skills">
            <h2>My Skills</h2>
            {skills.map((skill, index) => (
                <div key={index} className="skill-bar">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-level" style={{width: `${skill.level}%`}}></div>
                </div>
            ))}
        </section>
    );
};

export default Skills;
