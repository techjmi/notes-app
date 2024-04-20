import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesList = ({notes,handleAddNote, handledeleteNote, handleEdit,handleEditClick, isEditing}) => {
  return (
    <div className='notes-list'>
        {notes.map((note)=>(
            <Note  key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handledeleteNote={handledeleteNote}
            handleEdit={handleEdit}
            />
        ))}
        <AddNote handleAddNote={handleAddNote} handleEditClick={handleEditClick} isEditing={isEditing}/>
    </div>
  )
}

export default NotesList