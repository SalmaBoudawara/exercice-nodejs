var http = require('http')
var bl = require('bl')
http.get(process.argv[2], (resp) =>{
    resp.pipe(bl(function (err, data) {
        console.log(data.toString().length)
       console.log(data.toString())
    }))
})
// autre solution
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })