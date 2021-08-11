const fs = require('fs')
const chalk = require('chalk')

const addNote = function (title, body){
    const notes  = loadNotes()
    const duplicatedNotes = notes.filter(x => x.title === title)

    if (duplicatedNotes.length === 0){
        notes.push({
            title, body
        })
        saveNotes(notes)

    }else{
        console.log('duplicated note title')
    }
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = function (title){
    const notes = loadNotes()
    const filteredList = notes.filter(x => x.title !== title)
    saveNotes(filteredList);
    if (notes.length > filteredList.length){
        console.log('note removed')
    }else{
        console.log('nothing to remove')
    }
}

const loadNotes = function (){
    try {
        const buffer = fs.readFileSync('notes.json')
        const dataJSON = buffer.toString()
        return JSON.parse(dataJSON)
        
    } catch (error) {
        return []
    }
}

module.exports = {
    addNote, removeNote
}