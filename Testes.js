const express = require ('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); // aqui o express aceita arquivos estáticos como CSS, bootstrap, e arquivos JS, tbm imgages

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