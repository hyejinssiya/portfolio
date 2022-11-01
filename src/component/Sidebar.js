import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Sidebar = (props) => {
    /* const navigate = useNavigate(); 
    function handleClick() { navigate("/"); } */
    //메뉴배열
    const menus = [
        {
            id: '1',
            link: '/',
            menu: 'Home',
            img: '/portfolio/assets/images/ico_home.png'
        },
        {
            id: '2',
            link: '/project01',
            menu: 'Project',
            img: '/portfolio/assets/images/ico_project01.png'
        },
        {
            id: '3',
            link: '/project02',
            menu: 'Project (personal)',
            img: '/portfolio/assets/images/ico_project02.png'
        }
    ];
    //메뉴호버 툴팁
    const handleMouseOver = (e) => {
        //console.dir(e.currentTarget)
        e.currentTarget.classList.add('tooltip')
      };
    
      const handleMouseOut = (e) => {
        e.currentTarget.classList.remove('tooltip')
      };
    
    //메뉴리스트
    const [selectedIndex, setSelectedIndex] = useState(0);
    const listItem = menus.map((menu, index) =>
        <li key={index} className={`${selectedIndex === index ? "active" : ""}`}  onClick={() => setSelectedIndex(index)}>
            <NavLink to={menu.link} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <img src={menu.img} alt={menu.menu} /><span>{menu.menu}</span>
            </NavLink> 
        </li>
    );
    //여닫기버튼 클릭
    // eslint-disable-next-line no-unused-vars
    const [isActived, setIsActived] = useState(false);

    const handleCheck = () => {
        setIsActived((prev) => !prev);
        var wrap = document.querySelector('.wrap') 
        wrap.classList.toggle('open');
    }
    return (
        <div className="sidebar">
            <h1><Link to="/"><img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" /></Link></h1>
            <button className="btn_sidebar" onClick={ handleCheck }></button>
            <ul>{listItem}</ul>
            <div className="profile">
                <Link to="/profile">
                    <dl>
                        <dt><img src={process.env.PUBLIC_URL + '/assets/images/img_avatar.png'} alt="" /></dt>
                        <dd>Hyejn.Kwon</dd>
                    </dl>
                    <div className="tip">
                        <span>제가 궁금하세요? <strong>클릭클릭!!</strong></span>
                    </div>
                </Link>
            </div>
		</div>
	);
};

export default Sidebar;

