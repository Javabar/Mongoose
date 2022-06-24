require ("./db/connections")
const mongoose = require("mongoose")
const yargs = require("yargs");
const {addMovie, listMovies, removeMovie, editMovie} = require("./movies/movieMethods")

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            await addMovie({title: yargsObj.title, actor: yargsObj.actor});
            console.log(await listMovies());
        } else if (yargsObj.list){
            console.log(await listMovies());
        } else if (yargsObj.delete) {
            await removeMovie ({title: yargsObj.title, actor: yargsObj.actor})
            console.log(await listMovies());
        }  else if (yargsObj.edit) {
            await editMovie ({ title: yargsObj.title, actor: yargsObj.actor})
            console.log(await listMovies())
        } else {
            console.log("incorrect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv)
