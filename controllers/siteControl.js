exports.getIndex = (req, res) => {
    res.render('index', {
        pageTitle: 'Home Page',
        path: '/index'
    })
}

exports.getAbout = (req, res) => {
    res.render('about', {
        pageTitle: 'About Us',
        path: '/about'
    })
}