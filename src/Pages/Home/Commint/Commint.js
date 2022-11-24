import React from 'react';

const Commint = ({ com }) => {
    const { people, name, add, commit } = com;
    return (
        <div className="card my-5 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{commit}</p>
                <div className="card-actions mt-10  items-center justify-start">
                    
                    <img className='h-[75px] w-[75px]' src={people} alt="" />
                    <div>
                        <h5 className='text-lg font-bold'>{name}</h5>
                        <p>{add}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Commint;