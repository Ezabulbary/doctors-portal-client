import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch}) => {
    const {img, name, specialty, email } = doctor;

    const deleteDoctor = email =>{
        fetch(`http://localhost:5000/doctor/${email}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount){
                toast.success(`Doctor ${name} is Deleted`)
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-14 rounded-full">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => deleteDoctor(email)} class="btn btn-error btn-xs">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;