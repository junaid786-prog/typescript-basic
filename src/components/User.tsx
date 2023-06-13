import React from 'react'
import { User as userType } from '../utils/types'

const User = (props: userType) => {
  return (
    <div>
        <p>name: {props.name}</p>
        <p>gmail: {props.gmail}</p>
    </div>
  )
}

export default User