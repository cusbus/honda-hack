const router = require('express').Router()
const getMainLines = require('./get-main-lines.routes')
const getHOVRoutes = require('./get-HOV-routes.routes')
const getMainLineLinks = require('./get-main-line-links.routes')
const getHOVLinks = require('./get-HOV-links.routes')
const getIncidents = require('./get-incidents.routes')
const getRoadWorks = require('./get-road-works.routes')
const getRoadConditions = require('./get-road-conditions.routes')
const getRoadWays = require('./get-road-ways.routes')
const getMessageSigns = require('./get-message-signs.routes')
const getTransitProviders = require('./get-transit-providers.routes')
const getParkRideLots = require('./get-park-ride-lots.routes')
const clientRoutes = require('./client.routes')

// authentication
const authenticate = require('../filters/authenticate')

module.exports = router

// check authentication for all requests
router.use(authenticate)
router.use(require('../config/static.files'))
// API routes (group routing modules here - no empty lines between)
router.use('/api/get-main-line', getMainLines)
router.use('/api/get-HOV-routes', getHOVRoutes)
router.use('/api/get-main-line-links', getMainLineLinks)
router.use('/api/get-HOV-links', getHOVLinks)
router.use('/api/get-incidents', getIncidents)
router.use('/api/get-road-works', getRoadWorks)
router.use('/api/get-road-conditions', getRoadConditions)
router.use('/api/get-road-ways', getRoadWays)
router.use('/api/get-message-signs', getMessageSigns)
router.use('/api/get-transit-providers', getTransitProviders)
router.use('/api/get-park-ride-lots', getParkRideLots)

// router.use('/api/entities', entitiesRoutes)
// router.use('/api/examples', examplesRoutes)



// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router)

// register client routes
router.use(clientRoutes)


function useAPIErrorHandlers(router) {
    // Handle API 404
    router.use('/api/*', (req, res, next) => {
        res.sendStatus(404)
    })

    // Handle API 500
    router.use((err, req, res, next) => {
        // If the error object doesn't exists
        if (!err) {
            return next()
        }

        // Log it
        console.error(err.stack)

        // Redirect to error page
        res.sendStatus(500)
    })
}