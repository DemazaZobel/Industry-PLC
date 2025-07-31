import React from 'react';
import { Helmet } from 'react-helmet';
import Projects from '../components/Project';

const ProjectsPage = () => (
  <div className='bg-background mt-[-74px]'>
    <Helmet>
      <title>Projects | Dankil</title>
      <meta name="description" content="View Dankil's industrial, construction, and manufacturing projects." />
    </Helmet>
    <Projects />
  </div>
);

export default ProjectsPage;
