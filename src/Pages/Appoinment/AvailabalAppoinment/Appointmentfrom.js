import { format } from 'date-fns';
import React, { useContext } from 'react';
import toast, { ToastBar, ToastIcon } from 'react-hot-toast';
import { AuthProvider } from '../../../context/AuthContext';

const Appointmentfrom = ({ modalInfo, selectedDate, setModalInfo, refetch }) => {
    const { name: treatment, slots } = modalInfo;
    const { user } = useContext(AuthProvider)
    const hendleAppointment = e => {
        e.preventDefault()
        const from = e.target;
        const date = from.date.value;
        const time = from.time.value;
        const email = from.email.value;
        const name = from.name.value;
        const phone = from.phone.value;
        const booking = {
            appointmentData: date,
            treatment,
            pasantName: name,
            email,
            phone,
            time,
            date

        }
        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    toast.success("Booking success")
                    setModalInfo(null)
                    refetch()
                }
                else{
                    toast.error(data.massage)
                }
            })
        console.log(booking)

    }
    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{treatment}</h3>
                    <form onSubmit={hendleAppointment}>
                        <input name='date' type="text" disabled value={format(selectedDate, 'PP')} className="input input-bordered w-full mt-10" />
                        <select name='time' className="select select-bordered w-full mt-5">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }

                        </select>
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered w-full mt-5" />
                        <input name='name' type="text" defaultValue={user?.displayName} disabled placeholder="Your name" className="input input-bordered w-full mt-5" />
                        <input name='phone' type="number" placeholder="Your Phone" className="input input-bordered w-full mt-5" />
                        <input type="submit" value="Submit" className="input input-bordered w-full mt-5 bg-accent text-white" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default Appointmentfrom;