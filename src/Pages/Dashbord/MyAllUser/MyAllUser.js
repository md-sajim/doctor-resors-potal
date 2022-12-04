import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyAllUser = () => {
    const {data:users = []} = useQuery({
        queryKey:["user"],
        queryFn:async()=>{
            const res = await fetch('http://localhost:5000/user');
            const data = res.json();
            return data;
        }
    })
    return (
        <div>
            <div className="text-2xl">All Users</div>
            <div className="overflow-x-auto">
  <table className="table w-full">
<thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,i)=><tr>
        <th>{i+1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>Blue</td>
        <td>Blue</td>
        <td>Blue</td>
      </tr>
      )
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAllUser;