// Import statements for operations
const fs = require('fs');
const api = require('express').Router();
const uuid = require('uuid');

//Create a route to access the database and update the notes page
api.get('/', (request, response) =>{
    console.info(`${request.method} request received for stored notes`);
    //Read the database json and update the notes page with the data
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        } else {
        const parsedNotes = JSON.parse(data);
        response.json(parsedNotes);
        }
    });
    
})

// Create a post route that saves new notes into the database
api.post('/', (request, response) =>{
    console.info(`${request.method} request received to update a note`);
    // Pull in the user-entered data and structure it for ease of reference
    const{title, text} = request.body;
    if(request.body){
        const newNote = {
            title, 
            text,
            // Add an ID to the data for ease of location
            id: uuid.v4(),
        };

        //Open the database json file and parse the data so the new note can be added
        fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
            console.error(err);
            } else {
            // Parse the collected data and then add the new user-generated note
            const parsedNotes = JSON.parse(data);           
            parsedNotes.push(newNote);
            
            // Save the newly updated array to the database json file, overwriting its old contents
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
    // Reload the page to update the site
    response.redirect('back');
});

//Add a delete route to remove list items
api.delete('/:id', (request, response) =>{
    console.info(`${request.method} request received to delete an entry`);
    // Pull the item to be delete's ID for location purposes
    const {id} = request.params;

    // Open the database file 
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
        console.error(err);
        } else {
        var parsedNotes = JSON.parse(data);
        }
   
        //Create an array of entries that will be retained
        const retainedEntries = []
    
        // Go through the current databases' entries, adding items to the array while excluding items that need to be deleted
        for(entry of parsedNotes) {
            if(entry.id == id){
                console.log(`Entry ${id} to be deleted so skip it`)
            }
            else{
                retainedEntries.push(entry)
            }
        }
        
        // Save the entries that will be retained to the database json file
        fs.writeFile(
            './db/db.json',
            JSON.stringify(retainedEntries, null, 4),
            (writeErr) =>
            writeErr
                ? console.error(writeErr)
                : console.info('Successfully updated entry')
        );
    })
   
    // Reload the page to update the site
    response.redirect('back');
})

// Export the api module for use
module.exports = api;