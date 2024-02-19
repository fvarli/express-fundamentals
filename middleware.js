const accessControl = (req, res, next) => {
    const access = true;
    if (!access) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized'
        });
    }
    console.log('Middleware: Access Control');
    next();
}

const defaultMiddleware = (req, res, next) => {
    console.log('Middleware: Default');
    next();
}

module.exports = {
    accessControl,
    defaultMiddleware
};
