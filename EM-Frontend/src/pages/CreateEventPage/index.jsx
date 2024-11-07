import React, { useRef } from 'react'
import './index.css'

const CreateEventPage = () => {
    const formRef = useRef()

    const onSubmit = () => {
        const stratDate = formRef.current[0].value
        const stratTime = formRef.current[1].value
        const endDate = formRef.current[2].value
        const endTime = formRef.current[3].value
        const speaker = formRef.current[4].value
        const attendees = formRef.current[5].value.split(',')
        console.log(`
            Session is from ${stratDate},${stratTime} to ${endDate},${endTime}
            Speaker is ${speaker}
            attendess are ${attendees}
            `)
    }
    return (
        <div className="creat-event-container">
            <h1>Add New Session</h1>
            <form ref={formRef}>
                <div className='field'>
                    <label htmlFor='start-time'>Session Starts At:</label>
                    <input name='start-date' id="start-date" type="date" />
                    <input type='time' id="start-time" name='start-time' />
                </div>
                <div className='field'>
                    <label htmlFor='end-time'>Session Ends At:</label>
                    <input name='end-date' id="end-date" type="date" />
                    <input type='time' id="end-time" name="end-time" />
                </div>
                <div className='field'>
                    <label htmlFor="speaker">Enter the Speaker Email:</label>
                    <input type="email" name='speaker' id="speaker" placeholder="Ex: speaker@gmail.com" />
                </div>
                <div className='field'>
                    <label htmlFor="attendees">Enter the list of Attendee's Email:</label>
                    <textarea rows={5} name='attendees' id="attendees" placeholder="Ex: at1@gmail.com, at2@gmail.com,..." />
                </div>
            </form>
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}

export default CreateEventPage