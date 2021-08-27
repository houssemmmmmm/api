import React, { useEffect, useState } from 'react';
import axios from 'axios'

function UserList()
{
    const [repo,setRepo] = useState([]);

    const getRepo = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            console.log(response);
            const myRepo = response.data;
            setRepo(myRepo);
        });
    };

    useEffect(() => getRepo(), []);

    return (
    <div>
        {
            repo.map((repos) => (
                <h4 key={repos.id}>
                     <div>{repos.id}: {repos.name}</div>    
                </h4> 
            ))
        }
    </div>
    )
};

export default UserList;