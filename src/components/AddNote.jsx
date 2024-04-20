
import React, { useState } from 'react';

const AddNote = ({ handleAddNote , isEditing}) => {
  const [noteText, setNoteText] = useState('');
  const maxChars = 300;

  const handleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= maxChars) {
      setNoteText(inputText);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText('');
    }
  };

  const remainingChars = maxChars - noteText.length;

  return (
    <div className='note new'>
      <textarea
        cols='30'
        rows='10'
        placeholder='Add Your Notes'
        onChange={handleChange}
        value={noteText} // Ensure controlled value
      ></textarea>
      <div className='note-footer'>
        <small>{remainingChars} characters remaining</small>
        <button className='save' onClick={handleSaveClick}>
            {isEditing?"Edit":"Save"}
        </button>
      </div>
    </div>
  );
};

export default AddNote;
