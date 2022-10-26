import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Sidebar = (props) => {
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
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
  
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    //메뉴리스트
    const listItem = menus.map((menu) =>
        <li key={menu.id}><Link to={menu.link} className={isHovering ? 'tooltip' : ''} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}><img src={menu.img} alt={menu.menu} /><span>{menu.menu}</span></Link></li>
    );
    //여닫기버튼 클릭
    const [isActive, setIsActive] = useState(false);

    const handleCheck = () => {
        setIsActive((prev) => !prev);
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

