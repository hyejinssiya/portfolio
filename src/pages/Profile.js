import React from 'react'

const Profile = (props) => { 
  return (
    <>
        <h2 className="profile_title">웹퍼블리셔<br /> 권혜진</h2>
        <ul className="profile_list">
          <li>
            <dl>
              <dt>Skill</dt>
              <dd>HTML</dd>
              <dd>CSS</dd>
              <dd>SCSS</dd>
              <dd>jQuery</dd>
              <dd>Javascript</dd>
              <dd>React</dd>
              <dd>Git</dd>
              <dd>nexacro</dd>
              <dd>웹접근성(Web Accessibility)</dd>
              <dd>크로스브라우징</dd>
            </dl>
          </li>
          <li>
            <dl>
              <dt>Tool</dt>
              <dd>vscode</dd>
              <dd>Github</dd>
              <dd>gitlab</dd>
              <dd>bitbucket</dd>
              <dd>Photoshop</dd>
              <dd>XD</dd>
              <dd>Figma</dd>
              <dd>Zeplin</dd>
            </dl>
          </li>
          <li className="career">
            <dl>
              <dt>Career</dt>
              <dd>2019.07 ~ 2022.06 오픈필드</dd>
              <dd>담당업무 : 웹사이트 구축 및 유지보수</dd>
              <dd></dd>
            </dl>
          </li>
        </ul>  
    </>
  )
}

export default Profile;
