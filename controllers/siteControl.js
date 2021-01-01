exports.getHome = (req, res, next) => {
    res.redirect('/zh_hk/index')
}

exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Home Page',
        path: '/index',
        locale: req.params.locale
    })
}

exports.getAbout = (req, res, next) => {
    res.render('about', {
        pageTitle: 'About Us',
        path: '/about',
        locale: req.params.locale
    })
}