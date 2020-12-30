//Pirple assignment 1 - datatypes, objects, constructors

function SongConstructor(artist, name, genre, album, single, year, billboard) {
    //string, string, string, string, boolean, number, number
    this.artist = artist;
    this.name = name;
    this.genre = genre;

    //If the song is released as a single, there is no album title
    if (single) { 
        this.album = "none";
        this.single = true;
    } else {
        this.single = false;
        this.album = album;
    }

    this.album = album;
    this.single = single;
    this.year = year;

    //consider billboard = 0 if the song was never on any top charts
    if (typeof billboard == "undefined") {
        this.billboard = 0;
    } else {
        this.billboard = billboard;
    };

    //helper function for printing a quick title
    this.title = function () { 
        console.log(this.name + " - " + this.artist);
    };

    //print a full summary of the constructed song obj
    this.printOut = function () {
        this.title();
        console.log(this.year + " - " + this.genre);
        if (single) {
            console.log("single - billboard:" + this.billboard + "\n");
        } else {
            console.log(this.album + " - billboard:" + this.billboard + "\n");
        }
    }
}

//ex.1
var movement = {
    artist: "Hozier",
    name: "Movement",
    genre: "Soul",
    album: "Wasteland Baby!",
    year: 2019,
    billboard: 11
};
console.log(movement);


//ex .2
var sweetEmotion = new SongConstructor("Areosmith", "Sweet Emotion", "Rock", "album", true, 1975, 36);
//sweetEmotion.title();
sweetEmotion.printOut();

//ex .3
var stockholmSyndrome = new SongConstructor("Blink-182", "Stockholm Syndrome", "Punk", "Blink-182", false, 2003);
stockholmSyndrome.printOut();