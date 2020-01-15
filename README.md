## :camera:PhotoViewer Frontend App:camera:

This restroom locator app has a google map in which the user can navigate and select the marker from the map. Clicking on the marker will show the information of the restroom and it can be added to the Selected Restroom List on the right. There is an option of filtering out the type of restroom as well as the wheelchair accessibility ones on the bottom. The about page has a user story and goes in detail about how to use the website.

## Important Links
Here's a live link: http://ninjeagle.github.io/photoviewer-frontend

Here's the link to the backend: https://github.com/NinjaEagle/photoviewer-backend which contains the seeded data of selected restrooms and favorites.

## Setup

1. Use your terminal to navigate into the place where you want to clone NYC Restroom Finder's directory and `git clone` the url.
2. In terminal run `bundle install` in order to install the necessary gems needed to run the backend.
3. In terminal run `npm install` in order to install the necessary packages found in the `package.json` file to run this frontend.
4. Then this command: `yarn add semantic-ui-react`
5. Run `rails s` on the backend (https://github.com/NinjaEagle/photoviewer-backend) then run `npm start` for the frontend folder.
6. Open [http://localhost:3001](http://localhost:3001) or another port specified to view it in the browser.

## How to use this

PhotoViewer API is needed in order to accept HTTP requests from its frontend PhotoViewer. This allows users to:
* Toggle grayscale on all the photos
* Filter out image dimensions according to height and width(ex. 300 by 300, 100 by 100).


**If** the backend https://photoviewer-backend.herokuapp.com/get_AllPictures url doesn't fetch in under the component, change all the fetches with photoviewer-backend back to localhost:3000 and start up the Rails backend first, following the steps in setup.

## Built With 🛠️

[ReactJS](https://github.com/facebook/react) - Frontend Framework
&&
[Ruby on Rails](https://github.com/rails/rails) - Backend Ruby on Rails API created using ActiveRecord deployed on Heroku
