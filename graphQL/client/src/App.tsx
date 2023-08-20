import React, { useEffect, useState } from 'react';
import './App.css';
import { GET_ALL_USERS, GET_ONE_USER } from './query/user';
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from './mutation/user';

type User = {
    id: number;
    username: string;
    age: number;
};

function App() {
    const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);//, { pollInterval: 500 });
    const { data: oneUser, loading: loadingOneUser } = useQuery(GET_ONE_USER, {
        variables: {
            id: 1
        }
    });
    const [newUser] = useMutation(CREATE_USER);
    const [users, setUsers] = useState([]);
    const [username, setUsername] = useState('');
    const [age, setAge] = useState(0);

    useEffect(() => {
        if (!loading) {
            setUsers(data.getAllUsers);
        }
    }, [data]);

    const addUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        newUser({
            variables: {
                input: {
                    username, age
                }
            }
        }).then(({ data }) => {
            console.log(data);
            setUsername('');
            setAge(0);
        });
    };

    const getAll = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        refetch();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <form>
                <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
                <input value={age} onChange={e => setAge(+e.target.value)} type="number" />
                <div className="btns">
                    <button onClick={(e) => addUser(e)}>Создать</button>
                    <button onClick={(e) => getAll(e)}>Получить</button>
                </div>
            </form>
            <div>
                {users.map((user: User) =>
                    <div className='user'>
                        {user.id} {user.username} {user.age}
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
