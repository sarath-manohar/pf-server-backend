const express = require('express')
const router = new express.Router()
const userController = require('../Controller/useerController')
const projectController= require('../Controller/projectController')
const jwtMiddleware =require('../Middlewares/jwtMiddleware')
const multerConfig =require('../Middlewares/multerMiddileware')

// register api

router.post('/user/register',userController.register)

// login

router.post('/user/login',userController.login)
// addProject

router.post('/addprojects',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

// getHomeProjects
router.get('/homeprojects',projectController.getHomeProjects)

// getAllUserProjects
router.get('/alluserprojects',jwtMiddleware,projectController.getAllUserProjects)
// getUserProjects
router.get('/userprojects',jwtMiddleware,projectController.getUserProjects)
// edituserProjects
router.put('/projects/edit/:pid',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)
// delete project

router.delete('/projects/remove/:pid',jwtMiddleware,projectController.removeProject)


// export router

module.exports=router