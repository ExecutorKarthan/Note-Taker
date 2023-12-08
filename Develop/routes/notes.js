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
        console.log(JSON.stringify(parsedNotes));
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
            note_id: uuid.v4(),
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

module.exports = api;
