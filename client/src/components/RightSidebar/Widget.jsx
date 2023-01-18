import React from "react";
import comment from "../../assets/comment-alt-solid.svg"
import pen from "../../assets/pen-solid.svg"
import blacklogo from "../../assets/blacklogo.svg"
const Widget=()=>
{
    return(
        <div className="widget">
            <h4>The Overflow Blog</h4>
            <div className="right_sidebar_div_1">
                <div className="right_sidebar_div_2">
                    <img src={pen} alt="pen" width="18"/>
                    <p>Observability is key to the future of software ( and your DevOps career)</p>
                </div>
                <div className="right_sidebar_div_2">
                    <img src={pen} alt="pen" width="18"/>
                    <p>Podcast 374:How valuable is your screen name?</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="right_sidebar_div_1">
                <div className="right_sidebar_div_2">
                    <img src={comment} alt="comment" width="18"/>
                    <p>Review queue workflows- Final Realse....</p>
                </div>
                <div className="right_sidebar_div_2">
                     <img src={comment} alt="comment" width="18"/>
                    
                    <p>Please welcome Valued Associates: #958-V2Blast #958-SpencerG</p>
                </div>
                <div className="right_sidebar_div_2">
                     <img src={blacklogo} alt="blacklogo" width="18"/>
                    
                    <p>Outdated Answer: accepted answer is np+ow updated on stack Overflow</p>
                </div>
                <h4>how Meta Posts</h4>
            {/* <div className="right_sidebar_div_1"> */}
                <div className="right_sidebar_div_2">
                    {/* <img src={comment} alt="comment" width="18"/> */}
                    <p>88</p>
                    <p> why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className="right_sidebar_div_2">
                     {/* <img src={comment} alt="comment" width="18"/> */}
                     <p>20</p>
                    
                    <p> What is the best course of action when a user has high enough rep to....</p>
                </div>
                <div className="right_sidebar_div_2">
                     {/* <img src={blacklogo} alt="blacklogo" width="18"/> */}
                     <p>14</p>
                    
                    <p>Is a link to the "How to ask " help page a useful comments?</p>
                </div>
            </div>
        </div>
    )
}
export default Widget