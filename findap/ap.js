const axios = require('axios')
const split = require('./spl.js')
const match = require('./ma.js')
//const findmnmx = require('./maxmin.js')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
//const CircularJSON = require('circular-json')
const cors = require('cors')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

let stdin = process.openStdin()
stdin.addListener("data", (d) => {
 var a = d.toString().trim()
var date = 'http://mon.phuket.psu.ac.th/arubalog/'+a+'.log'

const getData = async () => {
    try {
        
        return await axios.get(date)
    }catch(error) {
        console.error(error)
    }
}


const countData = async () => {

    const data = await getData()

    if (data.data){

        var str = data.data //ข้อมูล
    
        const strr = str.toString()      

        const lines = split.splitn(strr) //ทำข้อมูลเป็น array โดยแบ่งจาก \n(บรรทัด)
       
        //console.log("StudentID : 5935512034")
        const result = match.matchat2(lines)
    //     const result = match.matchat(lines) //เลือกข้อมูลที่มีการเชื่อมต่อ (522038) แล้วเก็บไว้เป็น array
        
    //     //const result1 = matchap(result)
     
         let n = (result===undefined)?0:result.length

         var count = 0

         for (let i = 0; i < n  ; i++) {
            
             count += 1

            var findap = split.splitspace(result[i])//fibdap  เก็บค่า   แต่ละ array ที่มีชื่อและรหัสนักศึกษา ใน array นั้นๆ

             var name =  match.matchap(findap) // name เก็บข้อมูล usename ทั้งหมดที่เชื่อมต่อมา
             
             var cutname = (cutname===undefined)?name:cutname+name// นำข้อมูล usename ทั้งหมดมาเก็บไว้เป็น string
                
         } 
         var tname = split.splitap(cutname) // เก็บ ไอดี นักศึกษา เป็น  array  
        
        var sestr = sortt(selectstr(tname)) // กรอง '' ออก
        //console.log(sestr)
        var rep = repeat(sestr) // เอาเฉพาะข้อมูลที่ไม่ซ้ำ
        
         var srt =  mapp(sestr) // นับจำนวนครั้งตัวซ้ำ
         console.log('repppppppppp',srt)
    //     var stc = 0
        
    //     for(var pro in srt)
    //     {
    //         stc += ' '+srt[pro] // นำข้อมูลจำนวนครั้งมาเก็บใน stc
    //     }
    //    //console.log(stc)
    //     var toa =intt(stc) //ทำเป็น array แล้วแปลงเป็น int

    //     toa.shift()

    //     var cid = 0

    //     for(var t in toa)
    //     {
    //         cid += toa[t]
    //     }
    //     console.log('----',cid)
    
    //     var person = []

    //     for(let na in rep)
    //     {
    //         person.push({username : rep[na],time : toa[na]})
           
    //     }
    //     console.log(person)
 
    //     var mnmx = findmnmx.findm(person)

    //     console.log('minmax',mnmx) // หาค่ามากสุด

        // for(let max in person)
        // {
        //     if(person[max].time == mnmx[1] )
        //     {
        //         console.log('maxxx', person[max].username)
        //     }
        //     if(person[max].time == mnmx[0] )
        //     {
        //         console.log('min', person[max].username)
        //     }
        // }
       
         var srtarr = JSON.stringify(srt)  

         console.log(srtarr)
    
    }

     app.get('/home/ap',function(req,res){
        res.json(srtarr)
      
     })
    // app.get('/home/max',function(req,res){
    //     res.send(mnmx)
      
    // })
     app.listen(8081)
    
}

const sortt = st => st.sort()
const selectstr = str => str.filter(str =>/\S/.test(str))
const strxx = strx =>  { if (strx !== undefined) return strx.toString()}
const sh = shit => shit.shift()

const cntime = ctime =>{
var  count = []
 ctime.forEach(function(i) { count[i] = (count[i]||0) + 1 })

 return count}

 const mapp = arr => arr.reduce(function(prev, cur){
     prev[cur] = (prev[cur] || 0 ) + 1
     return prev
 },{})

const repeat = re =>  re.filter(function(item, pos) {
    return re.indexOf(item) == pos;
})


var intt = a => a.split(' ').map(function(item) {
    return  parseInt(item, 10)
})


  

countData()

})


