const axios = require('axios')

const getData = async () => {
    try {
        return await axios.get('http://mon.phuket.psu.ac.th/arubalog/2019-01-23.log')
    }catch(error) {
        console.error(error)
    }
}

const countData = async () => {
    const data = await getData()

    if (data.data){
        var str = data.data //ข้อมูล
    
        const strr = str.toString()      
        const lines = spln(strr) //ทำข้อมูลเป็น array โดยแบ่งจาก \n(บรรทัด)
       
        //console.log("StudentID : 5935512034")

        const result = matchat(lines) //เลือกข้อมูลที่มีการเชื่อมต่อ (522038) แล้วเก็บไว้เป็น array
        
        //const result1 = matchap(result)
     
     
        let n = (result===undefined)?0:result.length
        var count = 0
        for (let i = 0; i < n  ; i++) {
            
            count += 1
            var findap = splspace(result[i])//fibdap  เก็บค่า   แต่ละ array ที่มีชื่อและรหัสนักศึกษา ใน array นั้นๆ
            var name =  matchname(findap)
           

            //var cutname = ''
            //console.log(name)
            
            var cutname = (cutname===undefined)?name:cutname+name
            //console.log(cutname)
            //
            // //console.log("Time : ",findap[0],findap[1],findap[2],findap[3])// แสดงเวลา

            // var ix = matchap(findap) //  ix เก็บค่า ชื่อ access point
            // var st = strxx(ix)
            // var eq = sple(st)

            // //console.log("Access point Name : ",eq[1])    

            // const indexspl = splspace(result1[i])
            // const nt = (indexspl[19]===undefined)?0:indexspl[19]         
            // const spl = sple(nt)
           
            
        } 
        var tname = splname(cutname)
       var sestr = selectstr(tname)
        var srt =  mapp(sestr)
        //var srtarr = splc(srt)
        console.log(srt)
        var srtarr = JSON.stringify(srt)
       //console.log(srtarr)
        //var srt = sortt(sestr)
        //var srt2 = cdata(srt)
        
        
        console.log(count)
    
    }
    
}

const sortt = st => st.sort()
const selectstr = str => str.filter(str =>/\S/.test(str))
const strxx = strx =>  { if (strx !== undefined) return strx.toString()}
const sple = spleq => { if (spleq !== undefined) return spleq.split('=') }
const spln = splff => { if (splff !== undefined) return splff.split('\n') }
const splc= splcl => { if (splcl !== undefined) return splcl.split(',') }
const splspace = spla => { if (spla !== undefined) return spla.split(' ') }
const splname = spla => { if (spla !== undefined) return spla.split('username=') }
const matchid = matchff => matchff.filter(matchff => matchff.match(/5935512034/g))
const matchat = matchatt => matchatt.filter(matchatt => matchatt.match(/522038/g))
const matchap = matchap => matchap.filter(matchap => matchap.match(/AP=/g))
const matchname = matchn => matchn.filter(matchn => matchn.match(/username=/g))

const cdata = countdata => {
    
    var current = null;
    var cnt = 0;
    for (var i = 0; i < countdata.length; i++) 
    {
        if (countdata[i] != current) 
        {
            
            if (cnt > 0) 
            {
                console.log(current +' time '+ cnt)
            }
            current = countdata[i];
            
            cnt = 1;
        } 
        else 
        {
            cnt++;
        }
    }
    if (cnt > 0) 
    {
       console.log(current +' timeeeeeeee '+ cnt)
    }

}



const cntime = ctime =>{
var  count = []
 ctime.forEach(function(i) { count[i] = (count[i]||0) + 1 })

 return count}

 const mapp = arr => arr.reduce(function(prev, cur){
     prev[cur] = (prev[cur] || 0 ) + 1
     return prev
 },{})


countData()



