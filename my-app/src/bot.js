const express = require('express')

const fs = require('fs')

const app = express()


var be = fs.readFileSync('benz.txt','utf-8')
console.log(be)
