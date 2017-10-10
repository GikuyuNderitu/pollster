const {JWT_SECRET} = require('../')

exports.protectRoute = (req, res, next) => {
    const authCookie = req.cookies.Authorization;
    
    console.log("token middleware hit");
    console.log("authenticate hit");

    console.log(authCookie);

    const token = authCookie.split(" ")[1]
    
    if(token) {
        jwt.verify(token, JWT_SECRET, (err, payload) => {
            if(err) return res.status(401).json({error: 'Authentication error.'});

            User.findById(payload.id, (err, user) => {
                if(err) {
                    res.clearCookie('Authorization');
                    return res.status(404).json({error: "User not found in database"});
                }
                next()
            })
            
        })
    } else {
        res.clearCookie('Authorization')
        res.status(404).json({error:"Authentication token not provided. Please login."})
    }
}