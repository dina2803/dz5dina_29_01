import React from 'react';
import './App.css';

const PrototypeForm = {
  key1: 'Barbara',
  key2: 'Hepworth',
  key3: 'bhepworth@react.com',
  key4: 'love cats',
};

function App() {
  return (
      <div className="App">
        <h1 style={titleStyle}>Prototype Form</h1>

        <div className="form-container" style={formContainerStyle}>
          <form style={formStyle}>
            <div className="form-field">
              <label style={labelStyle}>First Name:</label>
              <input
                  type="text"
                  style={inputStyle}
                  value={PrototypeForm.key1}
                  readOnly
              />
            </div>

            <div className="form-field">
              <label style={labelStyle}>Last Name:</label>
              <input
                  type="text"
                  style={inputStyle}
                  value={PrototypeForm.key2}
                  readOnly
              />
            </div>

            <div className="form-field">
              <label style={labelStyle}>Email:</label>
              <input
                  type="text"
                  style={inputStyle}
                  value={PrototypeForm.key3}
                  readOnly
              />
            </div>

            <div className="form-field">
              <label style={labelStyle}>Interests:</label>
              <input
                  type="text"
                  style={inputStyle}
                  value={PrototypeForm.key4}
                  readOnly
              />
            </div>
          </form>
        </div>

        <div className="data-display" style={dataDisplayStyle}>
          <p style={dataItemStyle}>
            <strong>First Name:</strong> {PrototypeForm.key1}
          </p>
          <p style={dataItemStyle}>
            <strong>Last Name:</strong> {PrototypeForm.key2}
          </p>
          <p style={dataItemStyle}>
            <strong>Email:</strong> {PrototypeForm.key3}
          </p>
          <p style={dataItemStyle}>
            <strong>Interests:</strong> {PrototypeForm.key4}
          </p>
        </div>
      </div>
  );
}

const titleStyle = {
  textAlign: 'center',
  fontSize: '28px',
  marginBottom: '20px',
};

const formContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  fontSize: '23px',
  borderRadius: '10px',
  marginTop: '10px',
};

const formStyle = {
  width: '300px',
};

const labelStyle = {
  fontWeight: 'bold',
  marginBottom: '20px',

};

const inputStyle = {
  width: '100%',
  fontSize: '18px',
  marginBottom: '20px',
};

const dataDisplayStyle = {
  marginTop: '20px',
  fontStyle: 'italic',
};

const dataItemStyle = {
  marginBottom: '10px',
};

export default App;
