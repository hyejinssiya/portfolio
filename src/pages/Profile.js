import React from 'react'

const Profile = (props) => { 
  return (
    <>
        <h2 className="profile_title">웹퍼블리셔<br /> 권혜진</h2>
        <div className="profile_list">
          <div>
            <p className="tit">Skill</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>jQuery</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Git</li>
              <li>nexacro</li>
              <li>웹접근성(Web Accessibility)</li>
              <li>크로스브라우징</li>
            </ul>
          </div>
          <div>
            <p className="tit">Tool</p>
            <ul>
              <li>vscode</li>
                <li>Github</li>
                <li>gitlab</li>
                <li>bitbucket</li>
                <li>Photoshop</li>
                <li>XD</li>
                <li>Figma</li>
                <li>Zeplin</li>
            </ul>  
          </div>
          <div className="career">
            <p className="tit">Career</p>
            <ul>
              <li>2022.07 ~ 서밋코퍼레이션</li>
              <li>담당업무 : 웹사이트 구축 및 유지보수</li>
              <li>2019.07 ~ 2022.06 오픈필드</li>
              <li>담당업무 : 웹사이트 구축 및 유지보수</li>
            </ul>
          </div>
        </div>  
    </>
  )
}

export default Profile;
