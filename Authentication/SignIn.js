import React from 'react'
import Button from 'react-bootstrap/Button';
import {auth, provider} from "./AuthConfig"
import {signInWithPopup} from "firebase/auth"

export default function SignIn() {
    const [value, setValue] = React.useState('')
    const handleLogIn = () => {
        signInWithPopup(auth, provider).then((data) =>{
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
        })
    }
    const handleLogout = () => {
        localStorage.clear()
        window.location.reload()
    }
    React.useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [value])
    return (
        <div className='AuthButtons'>      
            {value ? 
            <Button variant="outline-primary" onClick = {handleLogout}>Logout</Button>  :
            <Button variant="outline-primary" onClick = {handleLogIn}>Login</Button>
            }
        </div>
    )
}

{/* <Button variant="outline-primary">Login</Button> */}