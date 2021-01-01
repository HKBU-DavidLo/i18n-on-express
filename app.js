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
})

app.use(i18n.init)
// end of i18n setup

app.use('/zh_hk', (req, res, next) => {
    res.setLocale('zh_hk')
    next()
})

app.use('/en', (req, res,next) => {
    res.setLocale('en')
    next()
})

app.use('/zh_cn', (req, res,next) => {
    res.setLocale('zh_cn')
    next()
})


app.get('/', siteController.getHome)
app.get('/:locale/index', siteController.getIndex)
app.get('/:locale/about', siteController.getAbout)

app.listen(3000)