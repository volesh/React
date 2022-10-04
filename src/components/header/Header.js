import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faMessage, faCamera, faGear } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

import css from './header.module.css'
import {useState} from "react";

const Header = () => {
    const [child, setShild] = useState(1)

    const active = (n) =>{
        setShild(n)
    }

    return (
        <div className={css.navigate}>
            <ul>
                <li onClick={()=>active(1)} className={child===1&&css.active}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faHouse} /></span>
                        <span className={css.text}>Home</span>
                    </a>
                </li>
                    <li onClick={()=>active(2)} className={child===2&&css.active}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faUser} /></span>
                        <span className={css.text}>Profile</span>
                    </a>
                    </li>
                    <li onClick={()=>active(3)} className={child===3&&css.active}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faMessage} /></span>
                        <span className={css.text}>Message</span>
                    </a>
                    </li>
                    <li onClick={()=>active(4)} className={child===4&&css.active}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faCamera} /></span>
                        <span className={css.text}>Photos</span>
                    </a>
                    </li>
                    <li onClick={()=>active(5)} className={child===5&&css.active}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faGear} /></span>
                        <span className={css.text}>Settings</span>
                    </a>
                    </li>
                <div className={css.indicator}></div>
            </ul>
        </div>
    );
};

export {Header};