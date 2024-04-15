import React, { useEffect, useState } from "react";
import './user-list.scss';

export function UserList(){
    const [users, setUsers] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchUsers(){
            try{
                const result = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await result.json();
                setUsers(data);
            } catch (error){
                setIsError(prev => !prev);
            }
        }
        fetchUsers();
    }, [])

    if (isError){
        return (
            <p>Error</p>
        )
    }

    return(
        <ol className="users">
            <h2 className="users__title">Список пользователей</h2>
            {users.map(user => 
                <li className="user" key={user.id}>{user.name}</li>
            )}
        </ol>
    )
}