import React, {useState, useEffect, useRef} from 'react'
import "./Accordion.css"
import Chevron from './chevron.svg'

export default function Accordion() {

    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        console.log(refHeight);
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    const toggleState = () => {
        setToggle(!toggle)
    }

    console.log(toggle);
    return (
        <div className="accordion">

            <button 
            onClick={toggleState}
            className="accordion-visible">
                <span>Analysis Of The Name Kaushal :-</span>
                <img 
                className={toggle && "active"}
                src={Chevron} />
            </button>
            
            <div 
            className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p aria-hidden={toggle ? "true" : "false"}>
                K - You are a succesfull person in business and love. You are well known in your neighborhood.
                <br/>
                <br/>
                A - Your sense of analyzing life is stronger. You are known as a reasonable person.
                <br/>
                <br/>
                U - You don’t like rushing in your life. You want to stay calm and do what you do one by one, slowly.
                <br/>
                <br/>
                S - You like to imagine and when you do you have great fun. This wont scare you even if you do this too much!
                <br/>
                <br/>
                H - You prefer an ordinary life. Beeing calm when things go wrong is your natural ability.
                <br/>
                <br/>
                A - Your sense of analyzing life is stronger. You are known as a reasonable person.
                <br/>
                <br/>
                L - You have the most talented personality. You can be talented in so many different areas like art, sports and education.
                </p>
            </div>
            
        </div>
    )
}
