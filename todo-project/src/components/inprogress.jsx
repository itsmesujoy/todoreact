import React from 'react'
import { GrInProgress } from 'react-icons/gr';
import Common from './common';
import { AiFillDelete, AiOutlineCheck, AiOutlineClose, AiFillEdit } from 'react-icons/ai';

function Inprogress({ Todo,
  item, markincomplete, markcomplete }
) {






  return (
    <div>
          <div className="card" style={{ "width": " 18rem" }}>
            <button className='btn btn-success ml-2' onClick={() => { markcomplete (item)}}><AiOutlineCheck /></button>
            <button className='btn btn-warning ml-2' onClick={() => { markincomplete (item)}}><AiOutlineClose /></button>
          

            <Common item={item}/>
          </div>
    </div>
  )
}

export default Inprogress