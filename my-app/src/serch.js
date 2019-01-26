const axios = require('axios')
var http = require('http');

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

        // var strr = str.toString()
        // var lines = strr.split('\n')
         console.log("StudentID : 5935512034")
        // var http = require('http');
        http.createServer(function(req,res){
        
            // request.setTimeout(12000, function () {
            //     request.abort();
            // });
           // var readMe = fs.readFileSync('testt2.log', 'utf-8');
        res.writeHead(200,{'Content-type':'text/plain/log'});
        
        res.end(str);
        }).listen(6000,'127.0.0.1');



        
        }
        // for (let i = 0; i < lines.length; i++) {

            
        //     const result1 = lines.filter(lines => lines.match(/5935512034/g));
            
        //     const result = result1.filter(result1 => result1.match(/AP=/g));
        //     const stid = 'AP='
        //     //const indexid = result[i].lastIndexOf(stid) 
        //     const indexspl = result[i].split(' ')
        //     const spl = indexspl[19].split('=')
        //     console.log("Time", result[i].substring(0, 20))
        //     //console.log("Status : Authentication Successful")
        //     //console.log("Student ID", result[i].substring(96, 107))
        //     //console.log("MAC Address", result[i].substring(111, 129))
        //     console.log("Accesspoint Name",spl[1]/*, result[i].substring(indexid+3, indexid+15)*/)
        //     //, result[i].slice(46, 55)
        // }

        // lines.map(line => {
        //     if (!line) { return null }
        //     result.push(Number(line))
        // })



       // console.log('user logged in : ' ,res.length)
        //console.log('user logged in : ', res)
    }
 
countData()
