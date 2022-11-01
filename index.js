const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple Node Server Running');
});

app.use(cors());
app.use(express.json());

const users = [
    {id: 1, name: 'Jakaria', email: 'jakariamahmud016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
    {id: 2, name: 'Srabon', email: 'nazmus016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
    {id: 3, name: 'Topu', email: 'topuk016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
    {id: 4, name: 'Tanim', email: 'tanimd016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
]

// username : dbUser1
//password : GFIkWqXYSMnZuMMj


const uri = "mongodb+srv://dbUser1:GFIkWqXYSMnZuMMj@cluster0.g3axfky.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('simpleNode').collection('users');
        const user = { name: 'Jakaria mahmud', email: 'mahmud016@gmail.com' }
        // const result = await userCollection.insertOne(user);
        // console.log(result);
        app.post('/users', async (req, res) => {
    const user = req.body;
    // user.id = users.length + 1;
    // users.push(user);
    // console.log(user)
            const result = await userCollection.insertOne(user);
            console.log(result);
            user.id = result.insertedId;
    res.send(user);
})
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name;
        // filter users by query
        const filtered = users.filter(usr => usr.name.toLowerCase().indexOf(search) >= 0);
        res.send(filtered);
    }
    else {
        res.send(users);
    }
})

// app.post('/users', (req, res) => {
//     const user = req.body;
//     user.id = users.length + 1;
//     users.push(user); 
//     console.log(user)
//     res.send(user);
// })

app.listen(port, () => {
    console.log(`Simple Node Server Running on port ${port}`);
})