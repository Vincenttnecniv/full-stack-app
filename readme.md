Welcome to my first official full-stack app with a working api and attractive UI.

This app is created and designed by Vincent v.d Westhuizen. Here is some socials of mine:
https://www.linkedin.com/in/vincent-v-d-westhuizen/
https://github.com/Vincenttnecniv

This app is created using Express.js(which is a node js web application framework that I use for my server-side) and react (which is a JavaScript library that I use for my client-side.) I use CSS (Cascading Style Sheets. I use this to make the UI attractive) to style my react components.

How to use my application:

First you need to download (see how to download below) and run npm install to install all the dependencies needed for my application.

You can now run npm start wich will open the app in your browser.

When you have done this you will see a button "submit" which will run the express code. This will display a list of media. (Remeber Dax and music is only defualt so if you want to change it here is a list to do so ↓)

For the first input (Qeury):
Here you can search for whom or which you want to. Eg ed+sheeran (!NOTE! no capital letters and use '+' if you want to use a space.)

For the second input (Media):
movie, album, allArtist, podcast, musicVideo, mix, audiobook, tvSeason, allTrack

Furthermore to set to favourites just add index and click on "add" (!NOTE! the index start from 0.)

To delete the favourites click on the delete button.

How to install the application:

Here is a great walkthrough and explanation about github and how to download a repository from github.
↓
https://www.itpro.com/software/development/359246/how-to-download-from-github

How to test the application:

Go to the directory you want to test. Eg. cd Client-side. Then run, npm run test.

How I keep my application safe:

I make use of helmet to secure my Express app (it does this by setting up various HTTP headers.)
The ITunes search api doesn't provide an api key so I used template literals and paramaters to keep it more safe.

Link to this website: https://vincenttnecniv.github.io/full-stack-app/