import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import DeleteUser from '../layout/users/DeleteUser';

const Home = () => {

    const [users,setUsers] = useState([]);

    useEffect(() => {
        loadUser();
    },[]);

    const loadUser = async () => {
        const result = await axios.get("http://localhost:3005/users");
        setUsers(result.data);
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3005/users/${id}`);
        loadUser();
    }

    return (
        <div className='container'>
            <h1>Home Page</h1>

            <table class="table">
                <thead>
                    <tr className='bg-dark text-white'>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">Emails</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index) =>(
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link className="btn btn-primary m-2" to={`/user/${user.id}`}><i class="fa fa-eye" aria-hidden="true"></i></Link>

                                <Link className="btn btn-primary m-2" to={`/user/edit/${user.id}`} >Edit</Link>

                                <Link className="btn btn-danger m-2" onClick={() => deleteUser(user.id)} >Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default Home;