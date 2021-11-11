import React from "react";
import {Button} from '../Layouts/Button';
import './UserProfile.css';

function UserProfile () {
    return (
        <div className='profile_container'>
            <div className='profile_left'>
                <div className='profile_icon'>
                    <h1>User profile</h1>
                </div>
                <div className='profile_list'>
                    <ul className='list_info'>
                        <Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Overview</Button> 
                        <Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Education</Button>
                        <Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Skill</Button>
                        <Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>Language</Button>
                        <Button className='btns' buttonStyle='btn--test' buttonSize='btn--large'>History</Button>
                    </ul>
                </div>
                
            </div>
        </div>
    );

}

export default UserProfile;