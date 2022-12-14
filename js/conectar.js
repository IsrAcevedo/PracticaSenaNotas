function coneccion(){
    const mysql = require('mysql');

const conection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'senanotas'
})

    conection.connect((err)=>{
        if (err) throw err 
        console.log('conectado a la base de datos');
    })
    conection.query('SELECT * FROM instructor',(err, rows)=>{
        if (err) throw err 
        console.log(rows);
    })
    conection.end
}

