import React from 'react';

const Skills = () => {
  
  const styles = {
    skillMain: {
      textAlign: 'center',
      backgroundColor: 'antiquewhite'
    },
    skillsContent: {
      paddingTop: '0rem',
      marginTop: '0rem',
      marginBottom: '0',
      fontSize: '2.4rem',
      display: 'flex',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    },
    skillContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    },
    skillItems: {
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.skillMain}>
      <div style={styles.skillsContent}>
        <h1>Skills</h1>
      </div>
      <div style={styles.skillContainer}>
        <div style={styles.skillItems}>
          <h1>THis is skills page</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;

