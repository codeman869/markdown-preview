/* eslint-env node */
const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/*', async (req, res) => {
  await res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(process.env.PORT, () => {
  /*eslint-disable-next-line no-console */
  console.log(`Application running on port ${process.env.PORT}`)
})
