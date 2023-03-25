# conversa.ai-assignment
## setup step and run the project

1-clone by using Terminal/Git bush-command-git clone https://github.com/sarojrani/conversa.ai-assignment.git
2-install all dependencies(node_modules)-command----npm i
3-run server command----npm start

##** TO PERFORM CRUD OPERATION PLEASE GO THROOUGH THE BELLOW API_URL
TO CREATE USER-localhost:5000/user
TO LOGIN USER-localhost:5000/login
TO GET ALL DESIGN FOR USER-localhost:5000/getInfo/:userId
TO GET SPECIFIC DESIGN-localhost:5000/getSpecificDesign/:DesignId

FOR DESIGN THE FOLLOWING API IS THERE-
TO CREATE DESIGN-localhost:5000/creating
TO READ DESIGN-localhost:5000/reading
TO UPDATE -localhost:5000/updating
TO DELETE-localhost:5000/deleting

######## API DOCUMENTATION-
###USER 
#1ST API FOR USER-localhost:5000/user
THIS API I MADE FOR STORING USER NAME EMAIL AND PASSWORD WHICH IS GIVEN MANULLY ON POSTMAN(REQ.BODY)
PASSWORD IS STORED IN HASING FORMAT(DONE BY USING BCRYPT PACKAGE)
ON DB.
ex-
{
    "status": true,
    "data": {
        "name": "megha",
        "email": "megha@gmail.com",
        "password": "$2b$10$QHJtg6X5NOVDhWvh8zjLd.ZOLrh0ddnT745bHcVE612CQluj.Aw3K",
        "_id": "641e80d75e27aa256fe5eca4",
        "createdAt": "2023-03-25T05:04:23.063Z",
        "updatedAt": "2023-03-25T05:04:23.063Z",
        "__v": 0
    }
}

#2ND API FOR LOGIN-EMAIL AND HASH PASSWORD MATCHED FOR LOGIN IF MATCH THEN I AM USING JWT FOR CREATING TOKEN (JWT.SIGN(METHOD)).
{
    "status": true,
    "message": "User login successfull",
    "data": {
        "userId": "641d9ee000e7117015294436",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDFkOWVlMDAwZTcxMTcwMTUyOTQ0MzYiLCJwcm9qZWN0IjoiRGVzaWduTWFuYWdlbWVudCIsImlhdCI6MTY3OTcyMDcwOSwiZXhwIjoxNjc5ODkzNTA5fQ.MGzR3IAbF9-7yQqP9suZngNVaEXu3TKrz75KTLjvINk"
    }
}

#3RD API FOR GETING ALL DESIGN DETAIL FOR USER-HERE I AM GIVING USERID FOR GETTING SPECFIC USER HE/SHE CAN READ OR SEE ALL DESIGN DETAIL WHICH IS PRESENT IS DATABASE.--localhost:5000/getInfo/641d4c54a1bf0342932a50b3


## 4th api -for getting specific detail of design by user--
{
    "status": true,
    "specification": "looking fabulus"
}
##design
####5th api for /creating -design -i am giving id,title,description,price,tag for stroing information on db.
{
    "status": true,
    "data": {
        "id": "641e97356101739e980bf7cd",
        "userId": "641d9ee000e7117015294436",
        "title": "3d design ",
        "description": "saw top bottom view",
        "Model": "https://classroom-training-bucket.s3.ap-south-1.amazonaws.com/undefined/3d%20title.htm",
        "price": 4000,
        "tags": [
            "beautifull wall design,mehndi design"
        ]
    }
}

##6th api-/READING-geting all detail of design which is stored in db.


7 th api-/updating-by giving designId as params on url-i am updating title description tag also.


8 th -deleting-by giving designId-deleting and set isdeleted-true.

///######### POSTMAN COLLECTION ##//
I WILL BE PUTTING ON MAIL YOU CAN ONLY IMPORT ON YOUR POSTMAN . 




