const mongoose = require("mongoose");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
    console.log(error)
}
}

exports.removeMovie = async (movieObj) => {
    try {
        await Movie.deleteOne(movieObj);
    } catch (error) {
        console.log(error)
    }
};

exports.editMovie = async (theTitle, theEdits) => {
    try {
        const filmtitle = {title: theTitle};
        const newData = {$set: {title: theEdits.title, actor: theEdits.actor}}
        const editEntry = await Movie.updateOne(filmtitle, newData);
        console.log(editEntry);
    } catch (error) {
        console.log(error)
    }
};


// create an update one or update many functions 

// create a delete one or delete many functions
