var express=require('express');
var app=express();
var axios=require('axios');
app.use(express.static('src'));
app.get('/token',async function(req,res){
  const clienId = '5b5a9e18aec27e44c560'
  const clientSecret='0d8036774c8abb087c712352f137332bf75a700b'
  const code=req.query.code
  try{
    const {data}=await axios(`https://github.com/login/oauth/access_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      data:{
        client_id: clienId,
        client_secret	: clientSecret,
        code
      }
    })
    console.log('data',data)
    res.send(data)
  }catch (e){
    console.log('e',e)
    res.status(400).send(e)
  }
})
app.get('/biadu-token',async function(req,res){
  const clienId = 'k5ZnBP5OMjjyP6EF6GMhcSsY'
  const clientSecret='SzBIYxY8kZAsRh0wTmRmKsIR2LuIKfpo'
  const code=req.query.code
  try{
    const {data}=await axios(`https://openapi.baidu.com/oauth/2.0/token`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },

        params:{
          grant_type: 'authorization_code',
          redirect_uri: 'http://10.1.0.10:9892/baidu-redirect.html',
          client_id: clienId,
          client_secret	: clientSecret,
          code
        }
    })
    console.log('baidu data',data)
    res.send(data)
  }catch (e){
    const error=e.response?.data||'error'
    console.log('baidu e',error)
    res.status(400).send(error)
  }
})
app.get('/baidu-info',function (req,res){
  const access_token=req.query.access_token
  axios(`https://openapi.baidu.com/rest/2.0/passport/users/getInfo?access_token=${encodeURI(access_token)}`).then(response=>{
    console.log('response.data',response.data)
    res.send(response.data)
  })
})
app.listen(9892,function(){
  console.log('server is running on 9892')
})
