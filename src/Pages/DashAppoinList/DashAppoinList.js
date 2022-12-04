import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthProvider } from '../../context/AuthContext';

const DashAppoinList = () => {
    const { user } = useContext(AuthProvider)
    const url = `http://localhost:5000/dashbord?email=${user?.email}`
    const { data: tabelData = [] } = useQuery({

        queryKey: ["dashbord", user.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearr ${localStorage.getItem("accessToken")}`
                }
            });
            const data = await res.json()
            return data;
        }
    })
    console.log(localStorage.getItem("accessToken"))
    return (
        <div>
            {
                tabelData.length > 0 ? <><h2 className="text-2xl">Appoinment</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>NAME</th>
                                    <th>SERVICE</th>
                                    <th>DATE</th>
                                    <th>TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tabelData.map((booking, i) => <tr>
                                        <th>{i + 1}</th>
                                        <td>{booking.pasantName}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.appointmentData}</td>
                                        <td>{booking.time}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div></> : <><h2 className="text-2xl">Appoinment</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>NAME</th>
                                    <th>SERVICE</th>
                                    <th>DATE</th>
                                    <th>TIME</th>
                                </tr>
                            </thead>
                        </table>
                        <h2 className='text-2xl text-red-500'>Data not available</h2>
                    </div></>
            }
        </div>
    );
};

export default DashAppoinList;