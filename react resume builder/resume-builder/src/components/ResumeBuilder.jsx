import React, { useState } from 'react';
import './ResumeBuilder.css';

const ResumeBuilder = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    professionalSummary: '',
    careerObjective: '',
    experienceInternships: '',
    skillsAchievements: '',
    gender: '',
    education: '',
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the form data to the parent component (App.jsx)
    onSubmit(formData);
  };

  return (
    <form className="resume-builder" onSubmit={handleSubmit}>
      <h2>Resume Builder</h2>

      <div className="form-group">
        <label>Professional Summary</label>
        <textarea
          name="professionalSummary"
          value={formData.professionalSummary}
          onChange={handleChange}
          placeholder="Enter your professional summary..."
          required
        />
      </div>

      <div className="form-group">
        <label>Career Objective</label>
        <textarea
          name="careerObjective"
          value={formData.careerObjective}
          onChange={handleChange}
          placeholder="Enter your career objective..."
          required
        />
      </div>

      <div className="form-group">
        <label>Experience and Internships</label>
        <textarea
          name="experienceInternships"
          value={formData.experienceInternships}
          onChange={handleChange}
          placeholder="Enter your work experience..."
          required
        />
      </div>

      <div className="form-group">
        <label>Skills and Achievements</label>
        <textarea
          name="skillsAchievements"
          value={formData.skillsAchievements}
          onChange={handleChange}
          placeholder="Enter your skills and achievements..."
          required
        />
      </div>

      <div className="form-group">
        <label>Select Gender</label>
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              required
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              required
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              required
            />
            Other
          </label>
        </div>
      </div>

      <div className="form-group">
        <label>Educational Qualifications</label>
        <select
          name="education"
          value={formData.education}
          onChange={handleChange}
          required
        >
          <option value="">Select Education</option>
          <option value="High School">High School</option>
          <option value="Bachelor's Degree">Bachelor's Degree</option>
          <option value="Master's Degree">Master's Degree</option>
          <option value="PhD">PhD</option>
        </select>
      </div>

      <button type="submit" className="submit-btn">Generate Resume</button>
    </form>
  );
};

export default ResumeBuilder;
