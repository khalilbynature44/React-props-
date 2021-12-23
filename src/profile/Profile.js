import React from 'react'

const Profile = (props) => {
    return (
        <div>
            {props.n} is 
            {props.b} and he is a 
            {props.p}
            {props.children}
            {props.alert()}

        </div>
    )
}

export default Profile
