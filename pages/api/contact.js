import { MongoClient } from 'mongodb';
const dbUrl =
    'mongodb://localhost:27017/blog?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false';
const dbName = 'blog';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            name.trim() === '' ||
            !message ||
            message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input' });
            return;
        }

        // Store in a db
        const newMessage = {
            email,
            name,
            message,
        };

        // declaring client here to resolve scoping problems
        let client;
        try {
            client = await MongoClient.connect(dbUrl);
            console.log('connected to the server');
        } catch (error) {
            res.status(500).json({ message: 'Unable to connect to database.' });
            return;
        }

        const db = client.db();
        try {
            const result = await db
                .collection('messages')
                .insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'unable to save message' });
        }
        client.close();
        console.log(newMessage);
        res.status(201).json({ message: 'Success', data: newMessage });
    }
}
