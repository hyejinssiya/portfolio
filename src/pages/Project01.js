import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Filter from '../component/Filter';
import ProjectList01 from '../component/ProjectList01';

function Project01 ()  {
  const [all, setAll] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeFilter, setactiveFilter] = useState("");
  const fetchAll = () => {  
  
    const projects = [
      {
        "id": 1,
        "brand": "반응형",
        "name": "성보문화재보존관리시스템",
        "link": "https://bmuseum.or.kr/#none",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery / 웹접근성",
        "imgUrl": "/portfolio/assets/images/thum/p1.jpg",
        "date": "2022"
    },
    {
        "id": 2,
        "brand": "반응형",
        "name": "강동미즈여성병원",
        "link": "http://gdmiz.com/",
        "cbt": "기여도 : 퍼블리싱 100%",  
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p2.jpg",
        "date": "2022"
    },
    {
        "id": 3,
        "brand": "반응형",
        "name": "웹쟁이",
        "link": "https://www.webjangi.com/",
        "cbt": "기여도 : 퍼블리싱 50% (메인, 갤러리 목록, 프로필, 로그인 화면, 설정 등)",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p3.jpg",
        "date": "2022"
    },
    {
        "id": 4,
        "brand": "반응형",
        "name": "더드림병원",
        "link": "http://더드림병원.kr/",
        "cbt": "기여도 : 퍼블리싱 30% (인트로, 서브일부)",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p4.jpg",
        "date": "2022"
    },
    {
        "id": 5,
        "brand": "반응형",
        "name": "SK렌터카 기업",
        "link": "https://company.skcarrental.com/",
        "cbt": "기여도 : 퍼블리싱 95% (서브)",
        "skill": "html, css, jquery / 웹접근성마크 획득",
        "imgUrl": "/portfolio/assets/images/thum/p5.jpg",
        "date": "2021"
    },
    {
        "id": 6,
        "brand": "PC",
        "name": "LG U⁺ 차량관제",
        "link": "https://car.uplus.co.kr/security/login",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p6.jpg",
        "date": "2021"
    },
    {
        "id": 7,
        "brand": "반응형",
        "name": "Weather Q",
        "link": "https://weatherq.net/weatherq/#",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p7.jpg",
        "date": "2021"
    },
    {
        "id": 8,
        "brand": "APP",
        "name": "디에이치 포레센트",
        "link": "https://the-h.co.kr/Front/Premium/PremiumOn.aspx?no=4",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p8.jpg",
        "date": "2021"
    },
    {
        "id": 9,
        "brand": "반응형",
        "name": "노원평생교육포털",
        "link": "https://www.nowon.kr/nwll/web/main",
        "cbt": "기여도 : 퍼블리싱 5% (메인)",
        "skill": "html, css, jquery / 웹접근성",
        "imgUrl": "/portfolio/assets/images/thum/p9.jpg",
        "date": "2021"
    },
    {
        "id": 10,
        "brand": "반응형",
        "name": "국립중앙과학관 통합예약",
        "link": "https://rsvn.science.go.kr/nsm/main",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery / 웹접근성 마크 획득",
        "imgUrl": "/portfolio/assets/images/thum/p10.jpg",
        "date": "2020"
    },
    {
        "id": 11,
        "brand": "반응형",
        "name": "라인뮤직아카데미",
        "link": "http://www.linemusicacademy.com/",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p11.jpg",
        "date": "2020"
    },
    {
        "id": 12,
        "brand": "APP",
        "name": "레디투스",
        "link": "http://www.reditus.co.kr/",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p12.jpg",
        "date": "2020"
    },
    {
        "id": 13,
        "brand": "APP",
        "name": "예스오더",
        "link": "https://thevc.kr/ordertech",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p13.jpg",
        "date": "2020"
    },
    {
        "id": 14,
        "brand": "APP",
        "name": "티엔씨애드컴",
        "link": "http://m.tcadcom.co.kr/",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p14.jpg",
        "date": "2020"
    },
    {
        "id": 15,
        "brand": "반응형",
        "name": "제이여성병원",
        "link": "http://www.jwhospital.co.kr/",
        "cbt": "기여도 : 퍼블리싱 100%",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p15.jpg",
        "date": "2020"
    },
    {
        "id": 16,
        "brand": "반응형",
        "name": "와이드티엔에스",
        "link": "http://www.widetns.com/",
        "cbt": "기여도 : 퍼블리싱 90% (서브, 국영문)",
        "skill": "html, css, jquery",
        "imgUrl": "/portfolio/assets/images/thum/p16.jpg",
        "date": "2020"
    }
    ]
    
    setAll(projects);
    setactiveFilter("전체");
    setFiltered(projects);
  }

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <div className="project_list">
      <Filter 
        all={all}
        setFiltered={setFiltered}
        activeFilter={activeFilter}
        setactiveFilter={setactiveFilter}
      />
        <div
          layout 
          className="all-projects"
        > 
            {filtered.map(project => (
              <ProjectList01 
                key={project.id} 
                project = {project}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
}



export default Project01;
