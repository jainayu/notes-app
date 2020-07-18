const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, note) => {
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)
    
    debugger

    if(!duplicateNote) {
        notes.push({
            title: title,
            note: note
        })
        saveNotes(notes)
        console.log(chalk.inverse.green('New note added!!'))
    } else {
        console.log(chalk.inverse.red('Note title already present!!'))
    }
}
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.inverse.green('Note removed!!'))
    } else {
        console.log(chalk.inverse.red('No note found!!'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes: '))
    notes.forEach(note => console.log(note.title))
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note) {
        console.log(chalk.inverse(note.title))
        console.log(note.note)
    } else {
        console.log(chalk.inverse.red('No note found!!'))
    }


}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
}