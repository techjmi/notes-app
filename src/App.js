import "./App.css";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import SearchNotes from "./components/SearchNotes";
import Footer from "./components/Footer";

function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "this is my notes",
      date: "19/04/2024",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  //add notes function
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  //delete notes function
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id, newText) => {
    setIsEditing(true);
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, text: newText };
      }
      return note;
    });

    setNotes(updatedNotes);
    // setIsEditing(false)
  };

  //local storage part

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    } else {
      console.log("No saved notes found in local storage");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);
//edit state
// const handleEditClick = (id) => {
//   setIsEditing(true);
//   // setEditNoteId(id);
// };
  return (
    <div className={`${darkMode && "dark-mode"}`} >
      <div className="container">
        <SearchNotes
          handleSearchNote={setSearchText}
          handleToggleDarkMode={setDarkMode}
          darkMode={darkMode}
        />
      
      <NotesList
  notes={notes.filter((note) =>
    note.text?.toLowerCase().includes(searchText)
  )}
  handleAddNote={addNote}
  handledeleteNote={deleteNote}
  handleEdit={editNote}
  handleEditClick={setIsEditing}
  isEditing={isEditing}
/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
// notes if dark mode is true then dark mode class will come.. and we set bg black to dark mode class
