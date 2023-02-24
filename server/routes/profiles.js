const router = require('express').Router()
let Profile = require('../models/profile.model')

router.route('/').get((req, res) => {
    Profile.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error ' + err))
})

router.route('/add').post((req, res) => {
    const profile = req.body.username;

    const newProfile = new Profile({ profile })

    newProfile.save()
        .then(() => res.json("Profile added!"))
        .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router