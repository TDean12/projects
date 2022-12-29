const express = require('express');
const router = express.Router();
const {
    getPosts,

} = require("../controller/get")
const {

    createPosts,

} = require('../controller/create')
const {

    getPostbyId,

} = require('../controller/getID')
const {

    updatePosts,

} = require('../controller/user/update')
const {

    deletePosts,

} = require('../controller/delete')
const {

    getPostsByUserId,
} = require('../controller/user/')




router.get("/" , getPosts)

module.exports(router)