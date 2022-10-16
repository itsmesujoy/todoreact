import React from 'react'
import { GrInProgress } from 'react-icons/gr';
import Common from './common';
import { AiFillDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from 'react-icons/ai';

function Incomplete({ Todo,
    item, markinprogress }
) {






    return (
        <div>
            <div className="card" style={{ "width": " 18rem" }}>
                <button className='btn btn-primary ml-2' onClick={() => { markinprogress(item) }} ><GrInProgress /></button>
                <Common item={item} />
            </div>

        </div>
    )
}

export default Incomplete