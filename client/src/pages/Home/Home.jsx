import React from "react";
import HomeSidebar from "../../components/HomeSidebar/HomeSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";

import '../../App.css'
const Home=()=>{
    return(
        <div className="home_container_1">
            <LeftSidebar/>
            <div className="home_container_2">
                <HomeSidebar/>
                <RightSidebar/>
            </div>

        </div>
    )
}
export default Home