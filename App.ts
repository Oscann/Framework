import express from 'express'
import fs from 'fs'
import { getDirs } from './utils.js'

const app = express()

const test = fs.readdirSync('./pages')

console.log(getDirs())

for (const pages of test) {

    const url = `/${pages.split('.')[0]}`

    app.get(url, (req, res) => {
        res.send("Hello, World!")
    })
}

app.listen(3000, () => {
    console.log("HERE")
})