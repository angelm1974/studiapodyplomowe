https=require('https')
https.get('https://code-one.pl',(res)=>{
    console.log(res.statusCode)
    console.log(res.headers)
})