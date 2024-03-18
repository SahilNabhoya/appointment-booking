exports.isAuth = (req,res,next) => {
    if(req.cookies.sessionID){
        next();
    }
    else{
        res.redirect("/login");
    }
}