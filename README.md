# conversa.ai-assignment
## setup step and run the project

1-clone by using Terminal/Git bush-command-git clone https://github.com/sarojrani/conversa.ai-assignment.git
2-install all dependencies(node_modules)-npm i
3-run server command-npm start

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
{
    "status": true,
    "data": {
        "name": "saroj",
        "data": [
            {
                "Model": null,
                "_id": "641d336545dfcff054f1a747",
                "id": 201,
                "title": "3d design",
                "description": "looking horor",
                "user": "soni",
                "price": 10000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T05:21:41.722Z",
                "updatedAt": "2023-03-24T05:21:41.722Z",
                "__v": 0
            },
            {
                "Model": null,
                "_id": "641d338a45dfcff054f1a749",
                "id": 205,
                "title": "3d new Design",
                "description": "looking fabulus",
                "user": "priya",
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty",
                    "natural sunshine",
                    "home",
                    "home"
                ],
                "createdAt": "2023-03-24T05:22:18.467Z",
                "updatedAt": "2023-03-24T16:12:12.267Z",
                "__v": 0
            },
            {
                "Model": null,
                "_id": "641d4b24a2f72635c4fbcc9c",
                "id": 210,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d4712eae58aacba658c27",
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T07:03:00.301Z",
                "updatedAt": "2023-03-24T07:03:00.301Z",
                "__v": 0
            },
            {
                "Model": null,
                "_id": "641d4c74a1bf0342932a50b6",
                "id": 210,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d4712eae58aacba658c27",
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T07:08:36.857Z",
                "updatedAt": "2023-03-24T07:08:36.857Z",
                "__v": 0
            },
            {
                "Model": null,
                "_id": "641d5d31401832c59926d342",
                "id": 210,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d4f55f90472213978ccb0",
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T08:20:01.038Z",
                "updatedAt": "2023-03-24T08:20:01.038Z",
                "__v": 0
            },
            {
                "Model": null,
                "_id": "641d670ed3b6650e707b950a",
                "id": 210,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d4f55f90472213978ccb0",
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T09:02:06.932Z",
                "updatedAt": "2023-03-24T09:02:06.932Z",
                "__v": 0
            },
            {
                "Model": null,
                "_id": "641d68c9a6c8e5b7efa9f235",
                "id": 210,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d4f55f90472213978ccb0",
                "user": "soni",
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T09:09:29.594Z",
                "updatedAt": "2023-03-24T09:09:29.594Z",
                "__v": 0
            },
            {
                "_id": "641d9f6200e7117015294439",
                "id": 220,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d9ee000e7117015294436",
                "user": "monika",
                "Model": null,
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T13:02:26.062Z",
                "updatedAt": "2023-03-24T13:02:26.062Z",
                "__v": 0
            },
            {
                "_id": "641da3feb4b4b0184e4b9993",
                "id": 220,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d9ee000e7117015294436",
                "user": "monika",
                "Model": null,
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T13:22:06.144Z",
                "updatedAt": "2023-03-24T13:22:06.144Z",
                "__v": 0
            },
            {
                "_id": "641db00e2f06a9cb222c3aab",
                "id": 220,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d9ee000e7117015294436",
                "user": "monika",
                "Model": null,
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T14:13:34.698Z",
                "updatedAt": "2023-03-24T14:13:34.698Z",
                "__v": 0
            },
            {
                "_id": "641dcbcf29894d29572ffbfb",
                "id": 220,
                "title": "3d  modern design",
                "description": "looking fabulus",
                "userId": "641d9ee000e7117015294436",
                "user": "monika",
                "Model": null,
                "price": 7000,
                "tags": [
                    "kids",
                    "flower",
                    "natural beauty"
                ],
                "createdAt": "2023-03-24T16:11:59.588Z",
                "updatedAt": "2023-03-24T16:11:59.588Z",
                "__v": 0
            }
        ]
    }
}

## 4th api -for getting specific detail of design by user--
{
    "status": true,
    "specification": "looking fabulus"
}
##design
####5th api for creting design -i am giving id,title,description,price,tag for stroing information on db.

{
    "status": true,
    "data": {
        "id": 220,
        "title": "3d  modern design",
        "description": "looking fabulus",
        "userId": "641d9ee000e7117015294436",
        "user": "monika",
        "Model": null,
        "price": 7000,
        "tags": [
            "kids",
            "flower",
            "natural beauty"
        ],
        "_id": "641e82ef5e27aa256fe5ecaa",
        "createdAt": "2023-03-25T05:13:19.510Z",
        "updatedAt": "2023-03-25T05:13:19.510Z",
        "__v": 0
    }
}
##6th api-reading-geting all detail of design which is stored in db.


7 th api-updating-by giving designId as params on url-i am updating title description tag also.
{
    "data": {
        "Model": null,
        "_id": "641d338a45dfcff054f1a749",
        "id": 205,
        "title": "3d new Design",
        "description": "looking fabulus",
        "user": "priya",
        "price": 7000,
        "tags": [
            "kids",
            "flower",
            "natural beauty",
            "natural sunshine",
            "home",
            "home",
            "home",
            "new tree"
        ],
        "createdAt": "2023-03-24T05:22:18.467Z",
        "updatedAt": "2023-03-25T05:15:34.159Z",
        "__v": 0
    }
}

8 th -deleting-by giving designId-deleting and set isdeleted-true.



