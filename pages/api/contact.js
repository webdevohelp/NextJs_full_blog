export default function handler(req, res) {
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
        console.log(newMessage);
        res.status(201).json({ message: 'Success', data: newMessage });
    }
}
