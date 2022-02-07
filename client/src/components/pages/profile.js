import React from "react"
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER } from '../../utils/queries';
import Auth from '../../utils/auth';
import { Container } from "react-bootstrap";
import "../../styles/pages.css"


function Profile() {
    console.log(Auth.getUser())
    const { data: user } = Auth.getUser()

    return (
        <div className="profileContainer">
            <h1 >Hi, {user.firstName}</h1>
            <br />
            <h4>Past Orders</h4>
            <p> {user.email}</p>
        </div>

    )
}

export default Profile