let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');
let cors = require('cors');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// homepage route
app.get('/', (reg,res) => {
     return res.send({
        error: false,
        message: 'Welcome to Restful CRUD APi with Nodejs, Express, Mysql',
        written_by: 'Yayita',
        publishec_on: "https://milerdev.dev"
    })
})

//connection to mysql database
let dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ticketmanage'
})
dbCon.connect();

//retrieve all tickets
app.get('/tickets',(req, res) => {
    dbCon.query('SELECT * FROM tickets', (error,results,fields) => {
        if(error) throw error;

        let message = ""
        if(results === undefined || results.length == 0){
            message = "Ticket table is empty";
        }else{
            message = "Successfully retrieved all tickets";
        }
        return res.send({error: false, data: results,message: message});
    })
})

//sort latest update
app.get('/ticket/latestupdate',(req, res) => {
    dbCon.query('SELECT * FROM tickets ORDER BY updated_at desc', (error,results,fields) => {
        if(error) throw error;

        let message = ""
        if(results === undefined || results.length == 0){
            message = "Ticket table is empty";
        }else{
            message = "Successfully retrieved all tickets";
        }
        return res.send({error: false, data: results,message: message});
    })
})

//sort status
app.get('/ticket/status',(req, res) => {
    dbCon.query('SELECT * FROM tickets ORDER BY status', (error,results,fields) => {
        if(error) throw error;

        let message = ""
        if(results === undefined || results.length == 0){
            message = "Ticket table is empty";
        }else{
            message = "Successfully retrieved all tickets";
        }
        return res.send({error: false, data: results,message: message});
    })
})

//retrieve status 
app.get('/ticket/:status',(req, res) => {
    let status = req.params.status;

    dbCon.query('SELECT * FROM tickets WHERE status=?',status, (error,results,fields) => {
        if(error) throw error;

        let message = ""
        if(results === undefined || results.length == 0){
            message = "Ticket table is empty";
        }else{
            message = "Successfully retrieved all tickets";
        }
        return res.send({error: false, data: results,message: message});
    })

})

// add a new tickets
app.post('/ticket', (req,res) => {
    let title = req.body.title; 
    let description = req.body.description;
    let contact = req.body.contact;
    let status = "pending";
    //console.log(title,description,contact)

    //validation
    if(!title || !description || !contact ){
        return res.status(400).send({error : true, message: "Please provide ticket title, description and contact information"});
    }else{
        dbCon.query('INSERT INTO tickets (title,description,contact,status) VALUES(?, ?, ?, ?)', [title,description,contact,status], (error,results,fields)  => {
            if(error) throw error;
            return res.send({error: false, data:results, message: "Ticket successfully added"})
        })
    }
})

// update ticket by title
app.put('/ticket', (req,res) => {
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    let contact = req.body.contact;
    let status = req.body.status;

    //console.log(id,title,description,contact,status)
    //validation
    if(!id ||!status){
        return res.status(400).send({error : true, message: "Please provide ticket id, status"});
    }else{
        let updateObject = {};
        if (title !== undefined) updateObject.title = title;
        if (description !== undefined) updateObject.description = description;
        if (contact !== undefined) updateObject.contact = contact;

        if (Object.keys(updateObject).length === 0) {
            return res.status(400).send({ error: true, message: "No valid fields provided for update." });
        }

        updateObject.status = status;
        
        dbCon.query('UPDATE tickets SET ? WHERE id = ?', [updateObject, id], (error, results, fields) => {
            if (error) throw error;

            let message = results.changedRows === 0
                ? "Ticket not found or no changes made"
                : "Ticket successfully updated";

            return res.send({ error: false, data: results, message: message });
        });
    }
})

app.listen(3000, () => {
    console.log('Node App is running or port 3000');
})