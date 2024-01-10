import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/UserSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';


export default function AddForm() {
    const [idCounter, setIdCounter] = useState(11);
    const navigate = useNavigate(); 

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
    });

    const dispatch = useDispatch()
    const { fname, lname } = formData;

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fname.trim() || !lname.trim()) {
            alert('Please fill out all fields.');
            return;
        }

        const id = idCounter;
        setIdCounter(idCounter + 1);

        dispatch(addUser({ id, first_name: fname, last_name: lname }));

        console.log('Form submitted:', formData);
        setFormData({
            fname: '',
            lname: '',
        });
        navigate('/users');
    };


    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',
                    height: '300px',
                    border: '.5px solid gray',
                }}
            >
                <p style={{ textAlign: 'center', marginTop: '10px' }}>User Form</p>
                <input
                    name="fname"
                    value={fname}
                    placeholder="first_name"
                    type="text"
                    onChange={handleChange}
                    style={{
                        margin: '20px',
                        height: '30px',
                        paddingLeft: '10px',
                    }}
                />
                <input
                    name="lname"
                    value={lname}
                    placeholder="last_name"
                    type="text"
                    onChange={handleChange}
                    style={{
                        margin: '20px',
                        height: '30px',
                        paddingLeft: '10px',
                    }}
                />

                <button style={{ margin: '20px', height: '30px' }} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
