import React ,{ useState }from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { askQuestion } from '../../Actions/question'
import "./AskQuestion.css"
const AskQuestion=()=>
{
    const [ questionTitle, setQuestionTitle ] = useState('')
    const [ questionBody, setQuestionBody ] = useState('')
    const [ questionTags, setQuestionTags ] = useState('')
    const dispatch = useDispatch()
    const User = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log({ questionTitle, questionBody, questionTags,})
        dispatch(askQuestion({ questionTitle, questionBody, questionTags,userPosted:User?.result.name ,userId:User?.result?._id}, navigate))
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter'){
            setQuestionBody(questionBody + "\n")
        }
    }
    return(
        <div className="ask_question">
            <div className="ask_ques_container">
                <h1>Ask a public Question</h1>
                <form onSubmit={handleSubmit}>
                    <div className="ask_form_container">
                        <label htmlFor="ask_ques_title">
                            <h4>
                                Title

                            </h4>
                            <p>Be specific and imagin you're asking a question to another person</p>
                            <input type="text" id="ask_ques_title"  onChange={(e) => {setQuestionTitle(e.target.value)}} placeholder="eg Is there an R function for finding the index of an elemnt in a Vector?"/> 
                        </label>
                        <label htmlFor="ask_ques_body">
                            <h4>
                                Body

                            </h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="" id="ask-ques-body"   onChange={(e) => {setQuestionBody(e.target.value)}}cols="30" rows="10" onKeyPress={handleEnter} ></textarea>
                            {/* <input type="text" id="ask_ques_body" placeholder=""/>  */}
                        </label>
                        <label htmlFor="ask_ques_tags">
                            <h4>
                                Tags

                            </h4>
                            <p>Add up to 5 tags to describe what your question is about</p>
                            <input type="text" id="ask_ques_tags"  onChange={(e) => {setQuestionTags(e.target.value.split(" "))}} placeholder="e.g (xml typescript wordpress)"/> 
                        </label>
                        <input type="submit" value="Review yor Question" className="review_btn"/>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AskQuestion