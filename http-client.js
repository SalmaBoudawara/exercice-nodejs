const http = require('http');
http.get(process.argv[2], (resp) =>{
    resp.on('data', function (data) {
        console.log(data.toString())
    })
})

// autre solution
 //  const http = require('http')

// http.get(process.argv[2], function (response) {
//     response.setEncoding('utf8')
//     response.on('data', console.log)
//     response.on('error', console.error)
//   }).on('error', console.error)