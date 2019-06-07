import React from 'react';

import './profile.scss';

const Profile = ({ user }) => {
    const { name, login, avatarUrl } = user;

    return (
        <div className="profile">
            <img className="card-img" src={avatarUrl} alt={''}/>
            <div className="card-body">
                {name && <h2 className="profile__name card-title">{name}</h2>}
                <div className="profile__login card-subtitle">{login}</div>
            </div>
        </div>
    )
}

export default Profile;