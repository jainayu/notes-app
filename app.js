const yargs = require('yargs')
const notes = require('./notes.js')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true,
            type: 'string'
        },
        note: {
            describe: 'Note Body',
            demandOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.note)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true,
            type: 'string'
        },
    },
    handler(){
        notes.removeNote(argv.title)
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'listing all notes',
    handler(){
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a particular note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true,
            type: 'string'
        },
    },
    handler(){
        notes.readNote(argv.title)
    }
})

yargs.parse()