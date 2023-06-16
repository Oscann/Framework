import express from 'express'
import fs from 'fs'
import { getUrl } from './utils'

const app = express()
app.use(express.json())

const files = fs.readdirSync('src/pages', {recursive: true}) as string[]

console.log(files)

for (const pages of files) {

    const url = `/${pages.split('.')[0]}`

    app.get(url, (req, res) => {
        res.send("Hello, World!")
    })
}

app.listen(3000, () => {
    console.log("HERE")
})