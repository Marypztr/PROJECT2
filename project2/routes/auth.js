const router = require("express").Router()
const passport = require("passport")
const User = require("../models/User")
const { isLogged } = require("../handlers/middlewares")

router.get("/signup", (req, res, next) => res.render("auth/signup"))

router.post("/signup", (req, res, next) => {
    User.register({ ...req.body }, req.body.password)
        .then(() => {
            res.redirect("/auth/login")
        })
        .catch(err => next(err))
})
router.get("/login", (req, res, next) => res.render("auth/login"))

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) return next(err)
        if (!user) return res.redirect("/login")
        req.logIn(user, err => {
            if (err) return next(err)
            req.app.locals.loggedUser = user
            if (req.user.role === "ADMIN") return res.redirect("/admin/profile")
            else if (req.user.role === "USER") return res.redirect("/auth/profile")
        })
    })(req, res, next)
})

router.get("/logout", (req, res, next) => {
    req.app.locals.loggedUser = " "
    req.logOut()
    req.redirect("/login")
})

router.get("/profile", isLogged, (req, res, next) => {
    User.findById(req.user._id).populate('contributions')
        .then(user => res.render("auth/profile", user))
        .catch(err =>console.log(err))

    
}) 

router.get("/editProfile/:id",(req,res,next)=>{
    let {id} = req.params
    User.findById(id)
    .then(user => res.render('user/editProfile', user))
})

router.post("/editProfile/:id",(req,res,next)=>{
    let{id}= req.params
    User.findByIdAndUpdate(id, {...req.body}, {new: true})
    .then(user => res.redirect("/auth/profile"))
    .catch(err => console.log(err))
})

module.exports = router