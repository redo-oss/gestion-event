const mongoose = require('mongoose');
let readline = require('readline')
if (process.platform === "linux") {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });
    rl.on("SIGTERM", function () {
        process.emit("SIGTERM");
    });
}
let gracefulShutdown = function (msg, callback) {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};
process.once('SIGUSR2', function () {
    gracefulShutdown('npm nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', function () {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    });
});

// const dbUrl = "mongodb+srv://dbUser:dbUser@cluster0.flcts.mongodb.net/events?retryWrites=true&w=majority"
const dbUrl = "mongodb+srv://dbUser:dbUser@cluster0.flcts.mongodb.net/Event?retryWrites=true&w=majority"

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err)
        console.error(err);
    else
        console.log("Connected to the mongodb");
});
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbUrl);
});
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

require('../model/event.model')