import { FC } from 'react'
import User from '../components/User'
import { User as userType, userTypes } from '../utils/types'

const Home:FC = ():JSX.Element => {
  let users:userType[] = [
    {
      name: "ali",
      gmail: "ali@gmail.com",
      country: "Pakistan",
      userType: userTypes.seller
    }
  ]
  return (
    <div>
      {users.map(user=>{
        return <User name = {user.name} gmail = {user.gmail} country={user.country} userType={user.userType}/>
      })}
    </div>
  )
}

export default Home