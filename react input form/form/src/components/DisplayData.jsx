import React from 'react';

const DisplayData = ({ data }) => {
  return (
    <div>
      <h2>Submitted Data:</h2>
      <p><strong>Name:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Phone:</strong> {data.phone}</p>
    </div>
  );
};

export default DisplayData;
