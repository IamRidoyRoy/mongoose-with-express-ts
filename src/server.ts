import mongoose from "mongoose";
import app from './app'
const port: number = 5000

// Mongoose database connection 
async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongoose');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.log(`Something is wrong `, err)
    }

}
main();


