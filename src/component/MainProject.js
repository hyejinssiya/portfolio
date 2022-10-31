import React from 'react';
import MainProjectList from './MainProjectList';

const MainProject = () => {
  return (
    <div className="section">
          <ul className="main_project_list">
              {MainProjectList.map((mainProject) =>
                  <li>
                      <a href={mainProject.link} target="_blank">
                          <span className="tit"><em>{mainProject.number}</em>{mainProject.name}</span>
                          <span className="date">{mainProject.date}</span>
                      </a>
                  </li>
              )}
        </ul>      
    </div>
  );
};


export default MainProject;
