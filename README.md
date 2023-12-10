# Note-Taker
This project serves the user as a means to save notes in a to-do list style. 

## Description
This project was where I really began to understand how routing worked. I used a modular routing system and did not initially understand how the first argument of a route (variable.call(```This argument```)) was generating a server location. I initially thought that I needed to defined that each time, but then learned that a simple `\` allowed me to not add anything to the resource's location. This lead me to also understand that this location need not end in a file, but can be a reference to something that will execute in memory - specifically the api call. This project allowed me to leverage the uuid package for data id-tagging, which made adding data to and from a json file that I was using for a database much easier and precise.   

## Installation
There are no installation instructions as this project is web based. 

## Usage 
This is a note taking application that is web based. To use this project, you need to navigate to the site and click on ```Get Started```, which will take you to a separate page. Type in the note title and a body for the note, then click ```Save Note```. The note will appear on the left hand side bar. You can select any note on the left and it will be displayed in the main area, or you can click on the trashcan to delete its corresponding note. 

## License
This product is protected by a [MIT License](http://choosealicense.com/licenses/mit).

## Contributing
I created the routes and server.js files to serve as a backend to this project. I also wrote the routes to connect the front-end code with the backend functionality. The starter code for this project can be found at this url:[https://github.com/coding-boot-camp/miniature-eureka](https://github.com/coding-boot-camp/miniature-eureka). 

## Questions
My GitHub username is [ExecutorKarthan](https://github.com/ExecutorKarthan) and this project can be found at [https://github.com/ExecutorKarthan/Note-Taker](https://github.com/ExecutorKarthan/Note-Taker)

If you have questions or concerns about this project, please email me at [me@alexmessina.dev](me@alexmessina.dev)

