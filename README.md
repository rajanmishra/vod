Media App VOD (Video On-Demand) application
============================================

Simple Media App VOD (Video On-Demand) application that keeps track of a list of videos the user has watched.

Demo:  https://vod-10.herokuapp.com/#/

##Set-Up Locally
----------------------
1. Open command prompt or Terminal
1. Install nodejs (http://nodejs.org/download/) use node -v or nodejs -v to check version and node js is installed

2. Clone or download the project from github. https://github.com/rajanmishra/vod.git

3. Run ``` npm install ``` to install all node module dependancies 

4. Start your MongoDB server -- Install MOngoDB from here https://www.mongodb.com/download-center#community

	5.1 Open command prompt move to  ```C:\Program Files\MongoDB\Server\3.4``` (3.4 is version may vary) in windows -- location of mongodb in linux directly check on terminal if mongodb is installed
	
	5.2 Set DB path ```mongod --dbpath 'path to folder where you want to save documents'``` i.e. folder data inside your project ```C:\nodeproject\data``` 
	
	5.3 Open another command prompt or terminal go to  ```C:\Program Files\MongoDB\Server\3.4``` (3.4 is version may vary) in windows and run ```mongo``` 
	
4. Change monogoDB host here : model/connection.js -- ```mongodb://localhost/video ``` here video is database name
5. Change API enpoint here : public/src/js/config.js SERVICE_API i.e. -- ```http://localhost:3000```
6. Run ```  npm start ``` to run the application 
7. Application web app will be availabe in http://localhost:3000/ 

##Set-Up Production deployment -- Heroku
----------------------

1. Create account on Heroku https://signup.heroku.com/signup/dc
2. Download hHeroku CLI https://devcenter.heroku.com/articles/heroku-cli
3. Clone repo from github https://github.com/rajanmishra/vod.git ```git clone https://github.com/rajanmishra/vod.git ```
4. ```npm install```
5. heroku login (check if installed heroku -v)
6. Create a heroku project ```heroku create```
7. ```heroku addons:create mongolab``` (to install mongodb)
8. Check monogodb host here : model/connection.js (change according to local or production) local is ```'mongodb://localhost/video'``` and for heroku is ```process.env.MONGODB_URI```
9. Change API enpoint here : public/src/js/config.js (generated in step 6) SERVICE_API i.e. -- ```http://localhost:3000``` or ```http://vod-10.herokuapp.com``` for live
10.Push code to heroku: ```git push heroku master```

11. Ensure that at least one instance of the app is running:  ```heroku ps:scale web=1```

12. ```heroku open```


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
Hosting - Heroku


##Deployment

Application is deployed on heroku, nodejs hosting environment using continuous deployment feature for github projects.( Each git push to the heroku master branch is automatically deployed ).

Ensure that at least one instance of the app is running:``` heroku ps:scale web=1```

1. ```git push heroku masters```
2. ```heroku open```


