import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import React from 'react';
import './Project.css';

const Project = () => {
  const projectsData = [
        {
          id: 1,
          imageUrl: "https://source.unsplash.com/640x460?girl",
          heading: 'Step 1: Login',
          content: 'First Login to access Smart Board. If you have not Registered yet please register to access Smart Board.',
        },
        // Repeat the structure for each photo (2 to 6)

        {
          id: 2,
          imageUrl: "https://source.unsplash.com/640x460?girl",
          heading: 'Step 2: How to start ',
          content: 'Click on Start Button to access the Smart Board. After clicking on Start button Smart Board will open.',
        },

        {
          id: 3,
          imageUrl: "https://source.unsplash.com/640x460?girl",
          heading: 'Step 3: Want to Print',
          content: 'Make your hand gesture same as shown in the image to print something on Smart Board.',
        },

        {
          id: 4,
          imageUrl: "https://source.unsplash.com/640x460?girl",
          heading: 'Step 4: Dont want to print',
          content: 'If you dont want to print anything make hand gesture same as shown in the image.',
        },

        {
          id: 5,
          imageUrl: "https://source.unsplash.com/640x460?girl",
          heading: 'Step 5: Clear or Change colour',
          content: 'If you want to change colour or clear everything that you have written/drawn please go on the options that are available on the Smnart Board and make same hand gesture as shown in the figure in front of the box then you will be able to clear or change colour.',
        },

        {
          id: 6,
          imageUrl: "https://source.unsplash.com/640x460?girl",
          heading: 'Step 6 : Logout',
          content: 'After using the Smart Board you can Logout.',
        }
  ];

  return (
    <div>
      <Navbar />
    <div className="project-page" style={{ overflowY: 'auto' }}>
      <div className="project-container">
        {projectsData.map((project, index) => (
          <div key={project.id} className={`project-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="project-details">
              <h2>{project.heading}</h2>
              <p>{project.content}</p>
            </div>
            <div className="project-image">
              <img src={project.imageUrl} alt={`Project ${project.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Project;

