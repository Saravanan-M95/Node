import express from 'express';
//import bodyParser from 'body-parser';
import url from 'url';
import {v4 as uuid} from 'uuid';
import axios from 'axios'

// const app = express();

 const router = express.Router();

// app.use(bodyParser.json());

//http://localhost:5050/get/blue/orange?color=red&color2=yellow
// app.get('/get/:color1/:color2', (req,res) => 
// {
//    var param = url.parse(req.url, true).query;
//    // res.send(param.color);
//     res.send(req.params.color2);
// });


//http://localhost:8080/process_get?first_name=Saravanan&last_name=M
// app.get('/process_get', function (req, res) {  
//    var response = {  
//            first_name:req.query.first_name,  
//            last_name:req.query.last_name  
//        };
//        res.end(JSON.stringify(response));  
//     });


/*
{
    "first_name": "Saravanan",
    "last_name": "M"
}

*/
router.post('/process/post',function(req,res)
{
    router.use(express.json());
    console.log(req.body);
    let body = req.body;

    let upper = {} ;
    upper.firstName = body.first_name.toUpperCase();
    upper.lastName = body.last_name.toUpperCase();
    res.send(upper);
});


//http://localhost:5050/get/blue/orange?color=red&color2=yellow
router.get('/', (req,res) => 
    {
       var param = url.parse(req.url, true).query;
       // res.send(param.color);
        res.send('Hello world');
    });

//append a key to obj
router.post('/append/object', (req,res) => {
    let user = req.body;
    const users = [];

    users.push({...user, id:uuid()});
    res.send(users);
    //res.send(users[0].first_name);
});


// setTimeout(()=>{
//     let a =10;
//     console.log("aaaa");
// },1000);

router.get('/all/users', (req,res) => {
    console.log("inside all users")
    const users = getAllUsers();
    res.send(users);
});

function getAllUsers(){
    const users = [
        {
            "id":"1",
            "first_name": "Saravanan",
            "last_name": "M"
        },
        {
            "id":"2",
            "first_name": "Dinesh",
            "last_name": "T"
        },
        {
            "id":"3",
            "first_name": "Siva",
            "last_name": "S"
        },
        {
            "id":"3",
            "first_name": "Siva",
            "last_name": "S"
        }
    ]

    return users;
    
}

router.get('/getById/:id', async(req,res)=>{
    const { id } = req.params;
   let users = await axios.get('http://localhost:5050/names/all/users')
    .then( response => {
        console.log(id);
        console.log(response.data);

        return response.data.filter(x => x.id !== id);

    })
    .catch(err => {
        // Handle errors
         console.error(err);
    });
res.send(users);
});

export default router;
