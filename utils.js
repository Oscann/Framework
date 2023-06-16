import fs from 'fs'

export function getDirs() {
    const data = fs.readdirSync('./pages', {recursive: true})
    return data
}