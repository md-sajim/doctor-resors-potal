import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Appointmentfrom from './Appointmentfrom';
import AvailabalSpace from './AvailabalSpace';

const AvailabalAppoinment = ({ selectedDate }) => {
    const [modalInfo, setModalInfo] = useState(null)
    const date = format(selectedDate, 'PP')
   const {data,isLoading,refetch} = useQuery({
    queryKey:["services",date],
    queryFn: async()=>{
        const res = await  fetch(`http://localhost:5000/services?date=${date}`);
        const data = await res.json();
        return data;
    }
   })
   if(isLoading){
    return <p>loding..</p>
   }
    return (
        <div >
            <div className='text-center'>
                <p className='text-primary text-lg'>Available Appointments on {date}.</p>;
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-28'>
                {
                    data?.map(slot => <AvailabalSpace
                        key={slot._id}
                        slot={slot}
                        setModalInfo={setModalInfo}
                    ></AvailabalSpace>)
                }
            </div>

            {
                modalInfo && <Appointmentfrom
                    modalInfo={modalInfo}
                    setModalInfo={setModalInfo}
                    selectedDate={selectedDate}
                    refetch ={refetch}
                ></Appointmentfrom>
            }

        </div>
    );
};

export default AvailabalAppoinment;