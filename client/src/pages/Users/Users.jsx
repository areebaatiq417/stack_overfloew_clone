import React from 'react'

import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'

const Users = () => {

    return (
        <div className='home_container_1'>
            <LeftSidebar />
            <div className="home_container_2" style={{marginTop: "30px"}}>
                <h1 style={{fontWeight: "400"}}>Users</h1>
                <UsersList /> 
            </div>
        </div>
    )
}

export default Users