const router = require('express').Router()
const Workout = require('../models/workout.js')

router.post('/api/workouts', ({ body }, res) => {
  console.log('POST: /api/workouts')
  console.log({body});
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

router.put('/api/workouts/:id', ({ body, params }, res) => {
  console.log('POST: /api/workouts/:id')
  console.log({body, params})
  Workout.findByIdAndUpdate(
    params.id,
    {$push: {exercises: body}}
  )
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

router.get('/api/workouts', (req, res) => {
  console.log('GET: /api/workouts')
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

router.get('/api/workouts/range', (req, res) => {
  console.log('GET: /api/workouts/range')
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

module.exports = router