import fs from 'fs'

export function getUrl() {
    const data = fs.readdirSync('./pages', {recursive: true})
    return data
}