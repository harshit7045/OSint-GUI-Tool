const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/';
const client = new MongoClient(uri);

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/user', async (req, res) => {
    try {
        const phone = parseInt(req.body.phone)
        // Get the phone number from the request body
        await client.connect();
        console.log('Connected to the database');
        const database = client.db('leaked_numbers');
        const collection = database.collection('shopping_site');
        var documents = await collection.find({phoneNumber:
            phone}).toArray();
            if(documents.length!=0){
                console.log( documents[0]);
                res.send(documents[0]);
            }else{
                const cars = ["Saab", "Volvo", "BMW"];

                res.send(cars);
            }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/getUserData', async (req, res) => {
    console.log("int ther ");
    try {
        const { getJson } = require("serpapi");



        getJson({
            engine: "google_reverse_image",
            image_url: `${req.body.phone}`,
            api_key: "c135fa039a0d2f01447e4fea7398b8edd044dd280b2642abceb97fbae5115fd1"
        }, (json) => {
            console.log(json["inline_images"]);
            res.json({
                valid: json["inline_images"]

            });

        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
