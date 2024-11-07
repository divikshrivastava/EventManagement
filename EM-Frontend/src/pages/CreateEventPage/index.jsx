import React, { useRef } from 'react'
import { createNewSession } from '../../util/apiFunc'
import { useNavigate } from 'react-router-dom'
import './index.css'

const CreateEventPage = () => {
    const formRef = useRef()

    const nav = useNavigate()

    const goBack = () => {
        nav('/organizer')
    }

    const onSubmit = () => {
        const name = formRef.current[0].value
        const from = formRef.current[1].value
        const to = formRef.current[2].value
        const speakerName = formRef.current[3].value
        const capacity = formRef.current[4].value

        if(from<0 || from>24 ){
            alert("Hey Check the Start Time")
        }

        if(to<0 || to>24 ){
            alert("Hey Check the End Time")
        }

        if(to<from){
            alert("Can you please check your start and end time")
        }
        
        const session = {
            name: name,
            sessionId: Math.floor(1000 + Math.random() * 9000),
            speakerId: 10,
            speakerName: speakerName,
            capacity: capacity,
            attendees: [],
            from: from,
            to: to
        }
        console.log(createNewSession(session))
    }


    return (
        <div className="creat-event-container">
            <h1>Add New Session</h1>
            <form ref={formRef}>
                <div className='field'>
                    <label htmlFor="session-name">Enter the Session Name:</label>
                    <input type="text" name='session-name' id="session-name" placeholder="Ex: AI in Network" />
                </div>
                <div className='field'>
                    <label htmlFor='start-time'>Session Starts At:</label>
                    <input name='start-time' id="start-time" type="number" min={0} max={24}/>
                </div>
                <div className='field'>
                    <label htmlFor='end-time'>Session Ends At:</label>
                    <input name='end-time' id="end-time" type="number" min={0} max={24}/>
                </div>
                <div className='field'>
                    <label htmlFor="speaker">Enter the Speaker Name:</label>
                    <input type="email" name='speaker' id="speaker" placeholder="Ex: Dr.John" />
                </div>
                <div className='field'>
                    <label htmlFor="capacity">Enter the capacity:</label>
                    <input type="number" name='capacity' id="capacity" placeholder="Ex: 20" />
                </div>
                {/* <div className='field'>
                    <label htmlFor="attendees">Enter the list of Attendee's Email:</label>
                    <textarea rows={5} name='attendees' id="attendees" placeholder="Ex: at1@gmail.com, at2@gmail.com,..." />
                </div> */}
            </form>
            <button onClick={onSubmit}>Submit</button>
            <button style={{ margin: '10px' }} onClick={goBack}>Go Back</button>
        </div>
    )
}

export default CreateEventPage