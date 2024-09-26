import React from 'react';
import './ResumeDisplay.css';

const ResumeDisplay = ({ formData }) => {
  const {
    professionalSummary,
    careerObjective,
    experienceInternships,
    skillsAchievements,
    gender,
    education,
  } = formData;

  return (
    <div className="resume-display">
      <h2>Resume</h2>
      
      <section className="resume-section">
        <h3>Professional Summary</h3>
        <p>{professionalSummary}</p>
      </section>

      <section className="resume-section">
        <h3>Career Objective</h3>
        <p>{careerObjective}</p>
      </section>

      <section className="resume-section">
        <h3>Experience and Internships</h3>
        <p>{experienceInternships}</p>
      </section>

      <section className="resume-section">
        <h3>Skills and Achievements</h3>
        <p>{skillsAchievements}</p>
      </section>

      <section className="resume-section">
        <h3>Gender</h3>
        <p>{gender}</p>
      </section>

      <section className="resume-section">
        <h3>Educational Qualifications</h3>
        <p>{education}</p>
      </section>
    </div>
  );
};

export default ResumeDisplay;
