const jwt = require ('jsonwebtoken');




exports.userAuth = (req, res, next) => {
    const hasAuthorization = req.headers.authorization;
    console.log(hasAuthorization)
    console.log(req.rawHeaders)
    if(!hasAuthorization) {
        return res.status (401).json({
            message: 'Not Authorized to perform this action'
        });
    }

    const token = hasAuthorization.split(' ')[1];

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRETE);
        req.user = JSON.stringify(decodedToken);
        req.userId = decodedToken.userId;
        req.userEmail = decodedToken.email;
        req.username = decodedToken.username;
        next();

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}