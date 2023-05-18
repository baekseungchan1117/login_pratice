const express = require('express');
const app = express();
const PORT = 8080;


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'))

app.use(express.urlencoded( {extended:true}));
app.use(express.json())

app.get('/', function(req, res){
    res.render('index')
})


const id = 'banana';
const pw = '4321';

app.post('/axios', (req, res)=>{
    console.log(req.body);


    const { name, pass } = req.body

    let message = '';

    if (name === id || pass === pw) {
        message = '로그인 성공';
    } else {
        message = '로그인 실패';
    }

    res.send({ message });

})

app.listen(PORT, function(){
    console.log(`http://localhost${PORT}`);
})