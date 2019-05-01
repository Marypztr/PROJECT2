exports.isLogged = (req, res, next) => { 
    if (!req.isAuthenticated()){
        return res.redirect("/auth/login")
    }
    next()
}


exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "ADMIN") {
        req.logOut()
        res.redirect("/auth/login")
    } else {
        next()
    }
}
