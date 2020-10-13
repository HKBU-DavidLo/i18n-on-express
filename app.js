const path = require('path')
const express = require('express')

// i18n require:
const session = require('express-session')
const cookieParser= require('cookie-parser')
const i18n = require('i18n')

const siteController = require('./controllers/siteControl')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

// i18n setup
i18n.configure({
    locales: ['en', 'zh_hk', 'zh_cn'],
    directory: path.join(__dirname, 'locales'),
    defaultLocale: 'zh_hk',
    cookie: 'testi18n'
})

app.use(cookieParser('testI18n'))
app.use(session({
    secret: "testI18n",
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 10000 }
}))
app.use(i18n.init)
// end of i18n setup

app.get('/', siteController.getIndex)
app.get('/index', siteController.getIndex)
app.get('/about', siteController.getAbout)

app.get('/*/zh_hk', (req, res) => {
    var redirectedPath = req.path.split('/')[1]
    res.cookie('testi18n', 'zh_hk')
    res.redirect('/'+redirectedPath)
})
app.get('/*/en', (req, res) => {
    var redirectedPath = req.path.split('/')[1]
    res.cookie('testi18n', 'en')
    res.redirect('/'+redirectedPath)
})

app.listen(3000)