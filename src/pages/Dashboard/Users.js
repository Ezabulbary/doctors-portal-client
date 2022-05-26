import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='text-center lg:text-left'>
            <h2>All Users {users.length}</h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr className='uppercase'>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>User</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <UserRow
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;