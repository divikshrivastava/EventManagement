import React, { useEffect, useRef, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './index.css'

const CustomBadgePage = () => {
    const { user } = useAuth0()
    const name = user.name
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
                    <button >Check-in</button>
                </div>
            </div>
            <div className="nft">
                <div className="main">

                    <img className="tokenImage"
                        src="https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="NFT" />
                    <h1>Dev World</h1>
                    <hr />
                    <h2 id="badge-title">{name}</h2>
                    <p id="badge-hook" className="description">Role : {user['https://eventplan/roles']}</p>
                    <p id="badge-organization" className="description">
                        {selectedHook} : {info}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CustomBadgePage