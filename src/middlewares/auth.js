const adminAuth=(req, res,next) => {
    console.log("Admin auth is getting checked");
    const token = "xyz";
    const isAuthorizedAdmin = token==="xyz";
    if (!isAuthorizedAdmin) {
        res.status(401).send("Unauthorized Acess");

    }
    else {
        next();
    }
    
};
const userAuth=(req, res,next) => {
    console.log("User auth is getting checked");
    const token = "xyz";
    const isAuthorizedAdmin = token==="xyz";
    if (!isAuthorizedAdmin) {
        res.status(401).send("Unauthorized Acess");

    }
    else {
        next();
    }
    
};

module.exports = {
    adminAuth,
    userAuth,
    
};