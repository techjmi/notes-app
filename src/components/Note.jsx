import React, { useState } from 'react'
// import nanoid from 'nanoid'
import { MdDeleteForever, MdEdit } from 'react-icons/md';
const Note = ({id, text, date,handledeleteNote, handleEdit}) => {
    
  return (
    <div className='note'>
        <div className="">
        <MdEdit className='edit' onClick={()=>handleEdit(id)} />
        <span>{text}</span>
        </div>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever
					onClick={() => handledeleteNote(id)}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
    </div>
  )
}

export default Note