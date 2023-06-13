import { useState } from "react"
import { GetUserResponse, useLoginMutation } from "../redux/services/authApi"

const LoginForm = () => {
    const [loginError, setLoginError] = useState<string | null>(null)
    const [userData, setUserData] = useState({
        gmail: "",
        password: ""
    })
    const [loginUser] = useLoginMutation()
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(userData)
        loginUser(userData).unwrap()
        .then((data: GetUserResponse)=> {
            console.log(data.user)
        })
        .catch((e)=> setLoginError(e?.data?.message))
    }
  return (
    <form onSubmit={handleSubmit}>
        <h3>Log in</h3>
        {loginError && <p style={{color: "red"}} >{loginError}</p>}
        <div>
            <label htmlFor = "gmail">User name</label>
            <input type="email" id = "gmail" name = "gmail" placeholder="enter your gmail" onChange={(e)=>setUserData({...userData, gmail: e.target.value})} value={userData.gmail}/>
        </div>
        <div>
            <label htmlFor = "password">Password</label>
            <input id = "password" name = "password" placeholder="enter product password" onChange={(e)=>setUserData({...userData, password: e.target.value})} value={userData.password}/>
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm