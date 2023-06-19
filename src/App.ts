import express from 'express'
import fs from 'fs'
import { formatURL, getPagesPaths } from './utils'

const app = express()
app.use(express.json())

const files = getPagesPaths('src/pages')
const urls = formatURL(files)

console.log(urls)

for (const url of urls) {
    import(`./pages${url}`).then(pageData => {
        app.get(url, (req, res) => {
            res.send(pageData.default())
        })
    })
}

app.listen(3000, () => {
    console.log("Running...")
})