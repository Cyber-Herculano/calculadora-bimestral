const express = require ('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('Testes');
})



app.listen(6734, (erro) => {
    if (erro) {
        console.log('erro')
    }else{
        console.log('sevidor rodando !!!')
    }
    
});