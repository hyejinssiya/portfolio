import React from 'react'
import { motion } from "framer-motion";

const Profile = (props) => { 
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <h2 className="profile_title">WEB PUBLISHER<span>권혜진</span></h2>
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
              <li>VSCode</li>
              <li>Github</li>
              <li>GitLab</li>
              <li>Bitbucket</li>
              <li>Photoshop</li>
              <li>Adobe XD</li>
              <li>Figma</li>
              <li>Zeplin</li>
            </ul>  
          </div>
          <div>
            <p className="tit">Career</p>
            <dl>
              <dt>2022.07 ~ 서밋코퍼레이션</dt>
              <dd>담당업무 : 웹사이트 구축 및 유지보수</dd>
              <dd>주요프로젝트 : SK렌터카 닷컴 리뉴얼</dd>
            </dl>
            <dl>
              <dt>2019.07 ~ 2022.06 오픈필드</dt>
              <dd>담당업무 : 웹사이트 구축 및 유지보수</dd>
              <dd>주요프로젝트 : LG유플러스 차량관제(사용자), IOT(관리자), 비즈마켓
                <br /> SK렌터카 기업 리뉴얼 / 국립중앙과학관 통합예약 / 성보문화재보존관리시스템 등
              </dd>
            </dl>
          </div>
      </div>  
    </motion.div>
  )
}

export default Profile;
