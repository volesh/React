import {Outlet} from "react-router-dom";

import {Header} from "../../components";

const MaineLayaut = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MaineLayaut};