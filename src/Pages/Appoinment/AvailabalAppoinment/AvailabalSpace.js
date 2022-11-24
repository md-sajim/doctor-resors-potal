import React from 'react';

const AvailabalSpace = ({slot,setModalInfo}) => {
    return (
        <div className="card h-[230px] shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{slot.name}</h2>
                <p>
                    {
                        slot.slots.length > 0 ? slot.slots[0] : "Try anather day"
                    }
                </p>
                <p>
                  {slot.slots.length}  {
                        slot.slots.length > 1 ? "spaces" : "space"
                    } available
                </p>
                <div className="card-actions">
                   <label
                   disabled={slot.slots.length === 0}
                   onClick={()=>setModalInfo(slot)} htmlFor="my-modal-3" className="btn  mt-8 btn-primary bg-gradient-to-r from-secondary to-primary text-white">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AvailabalSpace;