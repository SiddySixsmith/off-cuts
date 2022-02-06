import React from "react"
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_SINGLE_USER, QUERY_ME } from '../../utils/queries';
import Auth from '../../utils/auth';
import "../../styles/pages.css"


function Profile() {

    const { _id } = useParams();

    const { loading, data } = useQuery(
        _id ? QUERY_SINGLE_USER
        {
            variables: { _id: _id },
        }
    );

    const user = data?.me || data?.user || {};

    if (Auth.loggedIn() && Auth.getUser().data._id === _id) {
        return <Redirect to="/" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.FirstName) {
        return (
            <h4>
                You need to be logged in to see your profile page. Use the navigation
                links above to sign up or log in!
            </h4>
        );
    }

    return (
        <div>
            <h2 className="card-header">
                {_id ? `${user.name}'s` : 'Your'} friends have endorsed these
                Purchases
            </h2>
        </div>
    );
};

export default Profile;