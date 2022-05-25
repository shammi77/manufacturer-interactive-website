import React, { useEffect, useState } from 'react';
import Part from './Part';

const AvailableParts = () => {
    const [parts,setParts]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/part')
            .then(res=>res.json())
            .then(data => setParts(data));
        
    },[])

    return (
        <div>
            <h1 className="text-warning text-6xl text- text-center m-10">Available parts</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part=><Part
                    key={part._id}
                    part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default AvailableParts;