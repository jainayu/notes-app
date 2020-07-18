# notes-app
This is my very first node.js application for writing notes trough terminal.

## Steps to install:

**1. Clone the application using**
```gitattributes
git clone https://github.com/jainayu/notes-app
```

**2. Change the directory using**
```bash
cd notes-app
```

**3. Install the application using**
```gitattributes
npm install
```
------

## How to Use:

**- Use `--help` to explore about how to add, remove, read or list all the notes:**

```gitattributes
node app.js --help
```
*Output*
```
app.js [command]

Commands:
  app.js add     Add a new note
  app.js remove  Remove a note
  app.js list    listing all notes
  app.js read    Read a particular note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```

**- Use `--help [command]` to explore more about individual command add, remove, read or list:**

*Example: To find more about how to add a note you can simply write*
```gitattributes
node app.js --help add
```
*Output: It will let you know what parameters(`--title` and `--note`) are needed to add the note.*
```
app.js add

Add a new note

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --title    Note Title                                      [string] [required]
  --note     Note Body                                       [string] [required]
```


