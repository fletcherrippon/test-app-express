const app = require('express')()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
})

app.listen(port, console.log(`Listening on ${port}`))