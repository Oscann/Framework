import express from 'express'

const app = express()

const test = ['/test', '/test2']

for (const url of test) {
    app.get(url, (req, res) => {
        res.send("Hello, World!")
    })
}

app.listen(3000, () => {
    console.log("HERE")
})