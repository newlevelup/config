const execSync = require('child_process').execSync

let gitRoot

try {
  gitRoot = execSync('git rev-parse --show-toplevel').toString().trim()
} catch {
  process.exit(0)
}

console.log(gitRoot)

const foo = { bar: true }
const fizz = foo?.bar

const nextConfig = {
  exportTrailingSlash: true,
  poweredByHeader: false,
  env: {
    SITE_URL: 'https://test.com',
    DISALLOW_ROBOTS: true,
    BUZZ: fizz
  },
  exportPathMap: defaultPathMap => {
    const customPathMap = { '/404.html': { page: '404' } }
    const pathMap = Object.assign(customPathMap, defaultPathMap)
    const ignorePaths = ['/404', '/index']

    ignorePaths.map(path => delete pathMap[path])

    return pathMap
  }
}

console.log(nextConfig)
