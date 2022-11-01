import React, { useState } from 'react';
import MainProjectList from './MainProjectList';

const MainProject = () => {

  const handleMouseOver = (e) => {
    //console.dir(e.currentTarget)
    e.currentTarget.classList.add('over');
    document.querySelector('.cursor').classList.add('imgShow');
  };

  const handleMouseOut = (e) => {
    e.currentTarget.classList.remove('over');
    document.querySelector('.cursor').classList.remove('imgShow');
  };

  return (
    <div className="section">
        <ul className="main_project_list">
          {MainProjectList.map((mainProject) =>
            <li key={mainProject.id}>
              <a href={mainProject.link} target="_blank" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <span className="tit"><em>{mainProject.number}</em>{mainProject.name}</span>
                <span className="date">{mainProject.date}</span>
              </a>
            </li>
          )}
      </ul> 
      <button type="button"></button>
    </div>
  );
};


export default MainProject;
