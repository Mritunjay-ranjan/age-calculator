import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dobDate.getFullYear() - ((currentDate.getMonth() < dobDate.getMonth() || (currentDate.getMonth() === dobDate.getMonth() && currentDate.getDate() < dobDate.getDate())) ? 1 : 0);
    setAge(age);
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <div className="form-group">
        <label>Enter your date of birth</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your are {age} years old</p>}
    </div>
  );
}

export default App;
