import React from 'react'
import { MdSearch } from "react-icons/md";
import { FaSun, FaMoon } from 'react-icons/fa';
const SearchNotes = ({handleSearchNote,handleToggleDarkMode, darkMode}) => {
  return (
    <div className="header_dark">
        <div className="header">
        <div className='search'>
        <MdSearch className='search-icons' size='1.3em'/>
        <input type='text' placeholder='type to search'onChange={(event) =>
					handleSearchNote(event.target.value)
				}/>
    </div>
    <button
  onClick={() =>
    handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
  }
  className="save button"
>
  {darkMode ? <FaMoon /> : <FaSun />} 
</button>
        </div>
    </div>
  
  )
}

export default SearchNotes