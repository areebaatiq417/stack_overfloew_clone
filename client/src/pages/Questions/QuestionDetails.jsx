import React, { useState} from 'react'
import { useParams, Link, useNavigate ,useLocation} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import upvote from '../../assets/sort-up.svg'
import downvote from '../../assets/sort-down.svg'
import './Questions.css'
// import './ss.css'
import Avatar from "../../components/Avatar/Avatar"
import DisplayAnswers from "./DisplayAnswers";
// import { useSelector} from 'react-redux'
import { postAnswer,deleteQuestion ,voteQuestion} from '../../Actions/question'
import moment from 'moment'
import copy from 'copy-to-clipboard'
const QuestionDetails=()=>
{
    const {id}= useParams()
    console.log(id)
    const questionsList = useSelector(state => state.questionsReducer)
    console.log(questionsList)
    const [Answer, setAnswer] = useState('')
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const location = useLocation()
    const url = 'http://localhost:3000'

    const handlePostAns = (e, answerLength) =>{
        e.preventDefault()
        if(User === null){
            alert('Login or Signup to answer a question')
            Navigate('/Auth')
        }else{
            if(Answer === ''){
                alert('Enter an answer before submitting')
            } else{
                dispatch(postAnswer({ id, noOfAnswers: answerLength + 1, answerBody: Answer, userAnswered: User?.result.name ,userId:User.result._id}))
            }
        }
    }
    const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied url : '+url+location.pathname)
    }
    const handleDelete = () => {
        dispatch(deleteQuestion(id, Navigate))
    }
    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote'))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote'))
    }
    return(
        <div className="question_deatils_page">
            {
                questionsList.data=== null?
                <h1>Loading...</h1>:
                <>
                     {
                        questionsList.data.filter(question=>question._id === id).map(question=>(
                            <div key={question._id}>
                                <section className="question_details_container">
                                    <h1>{question.questionTitle}</h1>
                                    <div className="question_deatils_container_2">
                                        <div className="question_votes">
                                            <img src={upvote} alt="" width="18" className="votes_icon" onClick={handleUpVote}/>
                                            <p>{question.upVote.length - question.downVote.length}</p>
                                            <img src={downvote} alt="" width="18" className="votes_icon" onClick={handleDownVote}/>
                                            <div style={{width:"100%"}}>
                                                <p className="question_body">{question.questionBody}</p>
                                                <div className="question_details_tags">
                                                    {
                                                        question.questionTags.map((tag)=>
                                                        (

                                                            <p key={tag}>{tag}</p>
                                                        ))
                                                    }
                                                </div>
                                                <div className="question_actions_user">
                                                    <div>
                                                        <button type="button" onClick={handleShare}>Share</button>
                                                        {
                                                        User?.result?._id === question?.userId && (
                                                            <button type='button' onClick={handleDelete}>Delete</button>
                                                        )
                                                    }
                                                        {/* <button type="button" onClick={handleDelete}>delete</button> */}
                                                    </div>
                                                    <div >
                                                        <p> asked{moment(question.askedOn).fromNow()}</p>
                                                        <Link to={`/Users/${question.userId}`} className="user_link" style={{color:"#0086db"}}>
                                                            <Avatar backgroundColor="orange" px="2px" py="3px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                            <dv>
                                                                {question.userPosted}
                                                            </dv>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers !== 0 && (
                                        <section>
                                            <h3>
                                                {question.noOfAnswers} Answer
                                            </h3>
                                            <DisplayAnswers key={question._id} question={question} handleShare={handleShare}/>
                                        </section>
                                    )
                               


                                }
                                <section className="post_ans_container">
                                    <h3>Your Answer</h3>
                                    <form onSubmit={ (e) => { handlePostAns(e, question.answer.length) }}>
                                        <textarea name="" id="" cols="110" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br/>
                                        <input type="submit" className="post_ans_btn" value="post Your Answer"/>
                                    </form>
                                    <p> Browse other Question tagged
                                        {
                                            question.questionTags.map((tag)=>(
                                                <Link to="/Tags" key={tag} className="ans_tags">{tag}</Link>

                                            ))
                                        }or
                                        <Link to="/AskQuestion" style={{textDecoration:"none",color:"#009dff"}} className="user_link">Ask your own question</Link>
                                    </p>
                                </section>
                            </div>

                        ))
                        


                     }


                </>
            }

        </div>
    )
}
export default QuestionDetails