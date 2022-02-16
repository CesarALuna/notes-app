import React from 'react'
import Sidebar from './components/Sidebar'
import Split from 'react-split'
import { nanoid } from 'nanoid'
import './App.css'

function App() {
  const [notes, setNotes] = React.useState([])
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ''
  )

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Enter your markdown note's title here",
    }
    setNotes((prevNotes) => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  function findCurrentNote() {
    return (
      notes.find((note) => {
        return note.id === currentNoteId
      }) || notes[0]
    )
  }

  return (
    <main>
      {/* <Split sizes={[30, 70]} direction="horizontal" className="split"> </Split>*/}

      <Sidebar
        notes={notes}
        currentNote={findCurrentNote()}
        setCurrentNoteId={setCurrentNoteId}
        newNote={createNewNote}
      />
      {currentNoteId && notes.length > 0}
    </main>
  )
}

export default App
