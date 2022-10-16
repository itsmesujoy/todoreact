import React from 'react'
import Common from './common';

import { AiFillDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from 'react-icons/ai';

function Completed({ Todo,
    item, markincomplete }
) {
    return (
        <div>
            <div className="card" style={{ "width": " 18rem" }}>
                <button className='btn btn-warning ml-2' onClick={() => { markincomplete(item) }}><AiOutlineClose /></button>
                <Common item={item} />
            </div>

        </div>
    )
}

export default Completed