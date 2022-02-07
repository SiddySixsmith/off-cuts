import React from "react"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import "../../styles/pages.css"


function Profile() {
    console.log(Auth.getUser())
    const { data: user } = Auth.getUser()

    if (Auth.loggedIn()) {
        return (
            <h2>Hi, {user.firstName}</h2>
        )
    }
    return <h1>not logged in</h1>
}

export default Profile