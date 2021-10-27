import React from 'react'
import Hero from '../Hero';
import Sidebar from '../Sidebar'

function Profile() {
    return (
        <div className="flex">
            <Sidebar name='profile'/>
            <div className="content">
                <div className="isi">
                    <div className="title">Profile</div>
                    <div className="body">
                        <Hero />
                    </div>
                </div>
            </div>
        </div>
    );
}   

export default Profile
