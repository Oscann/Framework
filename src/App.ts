import express from 'express'
import fs from 'fs'
import { formatURL, getPagesPaths } from './utils'
import t from '../src/pages/index'

const app = express()
app.use(express.json())

const files = getPagesPaths('src/pages')
const urls = formatURL(files)

console.log(urls)

for (const url of urls) {
    import(`../src/pages${url}`).then(console.log)

    app.get(url, (req, res) => {
        res.send("Hello, World!")
    })
}

app.listen(3000, () => {
    console.log("HERE")
})