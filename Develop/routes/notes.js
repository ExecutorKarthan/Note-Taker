const { response } = require('express');
const fs = require('fs');

const api = require('express').Router();
const uuid = require('uuid');

api.get('/', (request, response) =>{
    console.info(`${request.method} request received for stored notes`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        } else {
        
        const parsedNotes = JSON.parse(data);
        response.json(parsedNotes);


        }
    });
    
})

api.post('/', (request, response) =>{
    console.info(`${request.method} request received to update a note`);

    const{title, text} = request.body;

    if(request.body){
        const newNote = {
            title, 
            text,
            id: uuid.v4(),
        };


        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            } else {
            
            const parsedNotes = JSON.parse(data);
    
            
            parsedNotes.push(newNote);
    
            
            fs.writeFile(
                './db/db.json',
                JSON.stringify(parsedNotes, null, 4),
                (writeErr) =>
                writeErr
                    ? console.error(writeErr)
                    : console.info('Successfully updated reviews!')
            );
            }
        });
    }
    response.redirect('back');
});

api.delete('/:id', (request, response) =>{
    console.info(`${request.method} request received to delete an entry`);
    const {id} = request.params;

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        } else {
        
        var parsedNotes = JSON.parse(data);
        }
   
        const retainedEntries = []
    
        for(entry of parsedNotes) {
            if(entry.id == id){
                console.log(`Entry ${id} to be deleted so skip it`)
            }
            else{
                retainedEntries.push(entry)
            }
        }

        console.info(retainedEntries)

        
        fs.writeFile(
            './db/db.json',
            JSON.stringify(retainedEntries, null, 4),
            (writeErr) =>
            writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated entry')
        );
   
   
    })
   

    
    response.redirect('back');
})

module.exports = api;
