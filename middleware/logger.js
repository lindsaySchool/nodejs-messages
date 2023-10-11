//iets loggen per request dat binnenkomt
const log = (req, res, next) => {
    console.log('Request received!');
    next();
}

module.exports = log;