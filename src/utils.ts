import fs from 'fs'

export function formatURL(paths: string[]) {
    return paths.map(path => 
        `/${path.replace('\\', '/')
            .replace('src/pages/', '')
            .split('.')[0]}`)
}

export function getPagesPaths(initialPath: string): string[] {
    const superficialFiles = fs.readdirSync(initialPath)
    let paths = []

    superficialFiles.forEach(page => {
        paths = paths.concat(
            page.split('.').length === 1 ?
                getPagesPaths(`${initialPath}/${page}`) :
                [`${initialPath}/${page}`]
        )
    })
    
    return paths
}