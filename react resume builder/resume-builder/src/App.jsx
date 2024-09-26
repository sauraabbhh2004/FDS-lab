import React, { useState } from 'react';
import ResumeBuilder from './components/ResumeBuilder.jsx';
import ResumeDisplay from './components/ResumeDisplay.jsx';

const App = () => {
  const [formData, setFormData] = useState(null);

  // Function to handle form submission
  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      {formData ? (
        // If formData is not null, show the resume display
        <ResumeDisplay formData={formData} />
      ) : (
        // Otherwise, show the resume builder form
        <ResumeBuilder onSubmit={handleFormSubmit} />
      )}
    </div>
  );
};

export default App;
