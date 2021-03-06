const logger = (request, response, next) => {
    if ( process.env.NODE_ENV === 'test' ) {
        return next()
    }
    console.log('Method:', request.method)
    console.log('Path:  ', request.path)
    console.log('Body:  ', request.body)
    console.log('---')
    next()
}

const error = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}

const getTokenFrom = (request) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

const tokenExtractor = (request, responce, next) => {
    request.token = getTokenFrom(request)
    next()
}

module.exports = {
    logger,
    error,
    tokenExtractor
}