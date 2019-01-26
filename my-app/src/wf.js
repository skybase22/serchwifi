const axios = require('axios')

const getData = async () => {
    try {
        return await axios.get('http://mon.phuket.psu.ac.th/arubalog/2018-10-29.log')
    }catch(error) {
        console.error(error)
    }
}

const countData = async () => {
    const data = await getData()

    if (data.data){
        var str = data.data
        //var res = str.match(/522038/g)

        const strr = str.toString()
        //console.log('de',strr)
        const lines = spln(strr)
        //console.log('debug line', lines)
        console.log("StudentID : 5935512034")
        const result = matchid(lines)
        const result1 = matchap(result)
     
     
        let n = (result1===undefined)?0:result1.length

        for (let i = 0; i < n  ; i++) {
            
            var findap = splspace(result1[i])//fibdap  เก็บค่า   แต่ละ array ที่มีชื่อและรหัสนักศึกษา ใน array นั้นๆ

            console.log("Time : ",findap[0],findap[1],findap[2],findap[3])// แสดงเวลา

            var ix = matchap(findap) //  ix เก็บค่า ชื่อ access point
            var st = strxx(ix)
            var eq = sple(st)
            console.log("Access point Name : ",eq[1])
            //console.log("AP Name : ",findap[19])

           

            


            //const indexid = result[i].lastIndexOf(stid) 
           // console.log('debug: ',result1[i])
            const indexspl = splspace(result1[i])
            const nt = (indexspl[19]===undefined)?0:indexspl[19]
            //console.log("debug:",nt)
            const spl = sple(nt)
           
            //console.log("Status : Authentication Successful")
            //console.log("Student ID", result[i].substring(96, 107))
            //console.log("MAC Address", result[i].substring(111, 129))
           /*, result[i].substring(indexid+3, indexid+15)*/
            //, result[i].slice(46, 55)
        } //console.log("debug---------------- : ",findap[1])
        
        
        
//         console.log("Time", result1[i].substring(0, 20))
//  console.log("Accesspoint Name",spl[1])


    }
    
        var datalog = {
        tine : [findap[0],findap[1],findap[2],findap[3]],
        dataap : ix
       
    }
    
}
console.log(datalog.tine)

const strxx = strx =>  { if (strx !== undefined) return strx.toString()}
const sple = spleq => { if (spleq !== undefined) return spleq.split('=') }
const spln = splff => { if (splff !== undefined) return splff.split('\n') }
const splspace = spla => { if (spla !== undefined) return spla.split(' ') }
const matchid = matchff => matchff.filter(matchff => matchff.match(/5935512034/g))
const matchap = matchap => matchap.filter(matchap => matchap.match(/AP=/g))
const ar = countData()



