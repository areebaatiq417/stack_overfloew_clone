import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
// import '../../App.css'
// import QuestionList from "../../components/HomeSidebar/QuestionList";
import QuestionDetails from "./QuestionDetails"
import './ss.css'
const DisplayQuestion=()=>
{
    return(
        <div className="container_1">
            <LeftSidebar/>
            <div className="container_2">
                <QuestionDetails/>
                
                
            </div> 
            <div className="container_3">
                <RightSidebar/>

            </div>

        </div>
        
        
    )
}
export default DisplayQuestion