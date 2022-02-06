import React from "react"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import "../../styles/pages.css"


function Profile() {

    const { _id } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_USER,
        {
            variables: { _id: _id }
        }
    );

    const user = data?.user || {};
    console.log(user)
    if (Auth.loggedIn()) {
        return (
            <h2>Hi, {user.firstName}</h2>
        )
    }
    return <h1>not logged in</h1>
}

export default Profile