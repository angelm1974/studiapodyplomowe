https=require('https')
https.get('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(chunk.toString())
    })
}
)

