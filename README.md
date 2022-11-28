# FULLSTACK LOGIN-SYSTEM



## Technologies I Use / MongoDB , Expressjs , Reactjs , Nodejs


* Backend packages :  express , bcrypt , body-parser , cors  , dotenv , mongoose , nodemon 
* Frontend packages : axios , bootstrap , nodemon , react-bootstrap , react-dom , react-router-dom 

How is it working: Gets the user's information and saves it to the database. While the password is saved in the database, it is encrypted and saved.
If the user enters the e-mail and password correctly, the user information is saved in the local storage and the information is deleted from the local storage after logging out.

## Structure

```
├─ client
│  ├─ public
│  │    └─ facicon.ico
│  │    └─ index.html
│  │    └─ logo192.png
│  │    └─ logo512.png
│  │    └─ manifest.json
│  │    └─ robots.txt
│  ├─ src
│  │  ├─ components
│  │  │  └─ HomePage.js
│  │  │  └─ login.js
│  │  │  └─ register.js     
│  │        
│  └─ App.js    
│  └─ App.test.js
│  └─ index.js
│  └─ reportWebVitals.js
│  └─ setupTests.js
│
└─ .gitignore
└─ package-lock.json
└─ package.json
└─ README.md
│  
├─ server
│   └─ .gitignore
│   └─ example.env
│   └─ package-lock.json
│   └─ package.json
│   └─ router.js
│   └─ server.js
│   └─ userSchema.js
│
├─ README.md
```

## Installation

```
 git clone https://github.com/mansuremanastirli/FullStack-Login-System
 cd FullStack-Login-System
 cd login 
 cd server 
 npm install 
 cd .. 
 cd client
 npm install 

 # Prepare your environment variables with generating .env file as example.env file

 npm start 
 cd ..
 cd server
 npm start
```