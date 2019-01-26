import express from 'express'
//import path from 'path'
const app = express()
app.get('/',(req,res)=>{
  console.log('hey');
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head></head>
      <body>
        <h1>hello</h1>
      </body>
    </html>
    `)
})
app.listen(8000,()=>{
  console.log('server is running on port 8000');
})