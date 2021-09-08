#!/usr/bin/env node
const [major] = process.version.slice(1).split('.')

if (Number(major) < 16) {
  // eslint-disable-next-line no-console
  console.error(`
    Version mismatch!
    You must use Node version 16 or greater to run the scripts within this repo.
    Version used: ${process.version}
  `)
  process.exit(1)
}
