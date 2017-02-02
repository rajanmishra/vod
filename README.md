Media App VOD (Video On-Demand) application
============================================

Simple Media App VOD (Video On-Demand) application that keeps track of a list of videos the user has watched.

Demo:  

##Set-Up Locally
----------------------

1. Install nodejs (http://nodejs.org/download/)
2. Clone or download the project from github.
3. Run ``` npm install ``` to install all node module dependancies 
4. Run ```  node start ``` to run the application
5. Application web app will be availabe in http://localhost:3000/ 

##Set-Up Server -- Heroku
----------------------

1. Create account on Heroku https://signup.heroku.com/signup/dc
2. Download hHeroku CLI https://devcenter.heroku.com/articles/heroku-cli
3. Clone repo from github
4. npm install
5. heroku login (check if installed heroku -v)
6. heroku addons:create mongolab (to install mongodb)
7. heroku local web Your app should now be running on http://localhost:5000/.

8. heroku create
9. change the URL of api with the above create URL in public/app/js/config.js
10.git push heroku master
11.heroku open


Application Features
1.	Application should display a list of videos in a horizontal carousel on the home page which can be scrollable.
2.	User should be able to select a video to play in full screen.
3.	When the video is finished, the application should go back to the previous page.
4.	The user should be able to use a mouse and keyboard to select the video.
5.	The user should be able to see a list of videos they have previously watched.
6.	The application must be responsible to changing screen sizes. You do not need to implement a mobile view but it should at least adjust based on the desktop browser width.


##Aplication Architechture

Application Server - Nodejs
Application Framework - Express js
Frontend - Angular, html, css
Database - MongoDB


##Deployment

Application is deployed in heroku, nodejs hosting environment using continuous deployment feature for github projects.( Each git push to the master branch is automatically deployed ).


1.git push heroku master
2.heroku open


