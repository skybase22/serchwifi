const axios = require('axios')
const split = require('./split.js')
const match = require('./match.js')
const findmnmx = require('./maxmin.js')

const getData = async () => {
    try {
        return await axios.get('http://mon.phuket.psu.ac.th/arubalog/2019-01-21.log')
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

        const result = match.matchat(lines) //เลือกข้อมูลที่มีการเชื่อมต่อ (522038) แล้วเก็บไว้เป็น array
        
        //const result1 = matchap(result)
     
        let n = (result===undefined)?0:result.length

        var count = 0

        for (let i = 0; i < n  ; i++) {
            
            count += 1

            var findap = split.splitspace(result[i])//fibdap  เก็บค่า   แต่ละ array ที่มีชื่อและรหัสนักศึกษา ใน array นั้นๆ

            var name =  match.matchname(findap) // name เก็บข้อมูล usename ทั้งหมดที่เชื่อมต่อมา
            
            var cutname = (cutname===undefined)?name:cutname+name// นำข้อมูล usename ทั้งหมดมาเก็บไว้เป็น string
                
        } 
        var tname = split.splitname(cutname) // เก็บ ไอดี นักศึกษา เป็น  array  
       // console.log(tname)
       var sestr = selectstr(tname) // กรอง '' ออก

       var rep = repeat(sestr) // เอาเฉพาะข้อมูลที่ไม่ซ้ำ
       //console.log('repppppppppp',rep)
        var srt =  mapp(sestr) // นับจำนวนครั้งตัวซ้ำ
     
        var stc = 0
        
        for(var pro in srt)
        {
            stc += ' '+srt[pro] // นำข้อมูลจำนวนครั้งมาเก็บใน stc
        }
       //console.log(stc)
        var toa =intt(stc) //ทำเป็น array แล้วแปลงเป็น int

        toa.shift()

        var cid = 0

        for(var t in toa)
        {
            cid += toa[t]
        }
        console.log('----',cid)
    
        var person = []

        for(let na in rep)
        {
            person.push({username : rep[na],time : toa[na]})
           
        }
        console.log(person)
 
        var mnmx = findmnmx.findm(person)

        console.log('minmax',mnmx) // หาค่ามากสุด

        for(let max in person)
        {
            if(person[max].time == mnmx[1] )
            {
                console.log('maxxx', person[max].username)
            }
        }
       
        var srtarr = JSON.stringify(person)  

        console.log(count)
    
    }
    
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



