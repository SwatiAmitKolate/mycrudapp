import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';

const DeleteUser = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3005/users`);
        setUser(result.data.reverse());
    };  

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3005/users/${id}`);
        loadUser();
    };

    return(
        <div>
            {/* <button className="btn-danger">Delete user</button> */}

            <button onClick={deleteUser}>Delete</button>
            <button onClick={() => navigate(`/home`)}>Cancle</button>
        </div>
    );
}

export default DeleteUser;

