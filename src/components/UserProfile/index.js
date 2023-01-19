import React,{Fragment} from 'react';
import './index.css';

let UserProfile = (props)=> 
{
    let {userDetails,key} = props;
    let {imageUrl,name,role} = userDetails;
    console.log(key);
    return(
        <Fragment>
            <li className='user-card-container py-3'>
                <img src={imageUrl} className='avatar' alt ='avatar'/>
                <div className='user-details-container'>
                    <h1 className='user-name'>{name}</h1>
                    <p className='user-designation'>{role}</p>
                </div>
            </li>
        </Fragment>
    )
}

export default UserProfile;