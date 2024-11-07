import React, { useEffect, useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { useNavigate } from 'react-router-dom'
import './index.css'

const CustomBadgePage = () => {
    const { user } = useAuth0()
    const name = user.name

    const nav = useNavigate()

    const goToAttendee = () => {
        nav('/attendee')
    }
    const HookQ = [
        "I study at",
        "I work at"
    ]

    // State for the selected hook and input value
    const [selectedHook, setSelectedHook] = useState(HookQ[0]);
    const [info, setInfo] = useState('');


    const onSubmit = () => {
        console.log(selectedHook)
        console.log(info)
    }

    return (
        <div className="badge-page-container">
            <div className="bg">
                <h1>DevWorld</h1>
            </div>
            <div className="form-container">
                <h2>Welcome, <span id="user-name">{name}</span></h2>
                <select id="hook-text" value={selectedHook}
                    onChange={(e) => setSelectedHook(e.target.value)}>
                    {HookQ.map((q) => <option value={q}>{q}</option>
                    )}
                </select>
                <input type="text" id="info" placeholder="Enter your info" value={info}
                    onChange={(e) => setInfo(e.target.value)} />
                <div className="buttons">
                    <button onClick={onSubmit}>Print</button>
                    <button onClick={goToAttendee}>Check-in</button>
                </div>
            </div>
            <div className="nft">
                <div className="main">

                    <img className="tokenImage"
                        src="/AWlogo.jpeg"
                        alt="Logo" />
                    <h2>{name}</h2>
                    <hr />
                    <h3 id="badge-title">{selectedHook} {info}</h3>
                    <p id="badge-hook" className="description">OPEN PASS</p>
                </div>
            </div>
        </div>
    )
}

export default CustomBadgePage