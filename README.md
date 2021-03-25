# task

> bank images

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/task
    npm install
    ```

3. Start your app

    ```
    npm start
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

/***************************************/

# Authentication

> http://localhost:3030/Authentication
> body => {
    "email":"ahmed@gmail.com",
    "password":"abc123",
    "strategy":"local"
}
# Users

> Must be Auth
> http://localhost:3030/users
> add user
> type:post
> request: =>  body => {
    "email":"ahmed@gmail.com",
    "password":"abc123"
}

> http://localhost:3030/users
> list user
> type:get
> response => {
    "total": 2,
    "limit": 10,
    "skip": 0,
    "data": [
        {
            "_id": "605c8d87306a03b203763074",
            "email": "omar@gmail.com",
            "createdAt": "2021-03-25T13:17:59.897Z",
            "updatedAt": "2021-03-25T13:17:59.897Z",
            "__v": 0
        },
        {
            "_id": "605c8d8e306a03b203763075",
            "email": "ahmed@gmail.com",
            "createdAt": "2021-03-25T13:18:06.559Z",
            "updatedAt": "2021-03-25T13:18:06.559Z",
            "__v": 0
        }
    ]
}
# Images

> Must be Auth
> http://localhost:3030/images
> add image
> type:post
> request: =>  body => {
    "image":"7azemEmam.jpg",
    "user_id":"605c8d8e306a03b203763075"
}

> http://localhost:3030/images
> list images
> type:get
> response => {
    "total": 7,
    "limit": 10,
    "skip": 0,
    "data": [
        {
            "_id": "605c8e61306a03b203763076",
            "user_id": [
                "605c8d8e306a03b203763075"
            ],
            "image": "mohamedHany.jpg",
            "createdAt": "2021-03-25T13:21:37.292Z",
            "updatedAt": "2021-03-25T13:21:37.292Z",
            "__v": 0
        },
        {
            "_id": "605c8fcb306a03b203763080",
            "user_id": [
                "605c8d8e306a03b203763075"
            ],
            "image": "7azemEmam.jpg",
            "createdAt": "2021-03-25T13:27:39.108Z",
            "updatedAt": "2021-03-25T13:27:39.108Z",
            "__v": 0
        }
    ]
}

> http://localhost:3030/images/605b4d244e5e88c73a39331e
> remove image => must be you own this image that you wanna delete it
> 

# Tags

> Must't be Auth
> http://localhost:3030/tags
> add tag
> type:post
> request: =>  body => {
      "name": "zamalek",
      "image_id": "605c8fcb306a03b203763080 "
 }

> http://localhost:3030/tags
> list tags
> type:get
> response => {
    "total": 7,
    "limit": 10,
    "skip": 0,
    "data": [
        {
            "_id": "605c8eb2306a03b20376307a",
            "image_id": [
                "605c8e61306a03b203763076"
            ],
            "name": "ahly",
            "createdAt": "2021-03-25T13:22:58.318Z",
            "updatedAt": "2021-03-25T13:22:58.318Z",
            "__v": 0
        },
        {
            "_id": "605c8ec4306a03b20376307b",
            "image_id": [
                "605c8e70306a03b203763077"
            ],
            "name": "ahly",
            "createdAt": "2021-03-25T13:23:16.055Z",
            "updatedAt": "2021-03-25T13:23:16.055Z",
            "__v": 0
        },
    ]
}

# Search

> Must't be Auth
> http://localhost:3030/search-images?tag=ahly
> but the tag that you wanna search on the query url   for example :- tag = ahly
> response => [
    "mohamedHany.jpg",
    "3aliMa3lol.jpg",
    "yasserIbrahim.jpg",
    "4inawi.jpg"
]
