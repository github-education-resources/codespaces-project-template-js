const express = require('express')
const app = express()
const port = 3000

// Mount build folder
app.use(express.static('dist'))

app.get('/*', (req, res) => {
    res.sendFile("index.html")
})

app.listen(port, () => {
    console.log(`Bhaukalik app listening on port http://localhost:${port}`)
})