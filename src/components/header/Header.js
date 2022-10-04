import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faMessage, faCamera, faGear } from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.navigate}>
            <ul>
                <NavLink to={'/'} className={css.active}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faHouse} /></span>
                        <span className={css.text}>Home</span>
                    </a>
                </NavLink>
                    <NavLink to={'/'}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faUser} /></span>
                        <span className={css.text}>Profile</span>
                    </a>
                    </NavLink>
                    <NavLink to={'/'}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faMessage} /></span>
                        <span className={css.text}>Message</span>
                    </a>
                    </NavLink>
                    <NavLink to={'/'}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faCamera} /></span>
                        <span className={css.text}>Photos</span>
                    </a>
                    </NavLink>
                    <NavLink to={'/'}>
                    <a>
                        <span className={css.icon}><FontAwesomeIcon icon={faGear} /></span>
                        <span className={css.text}>Settings</span>
                    </a>
                    </NavLink>
                <div className={css.indicator}></div>
            </ul>
        </div>
    );
};

export {Header};