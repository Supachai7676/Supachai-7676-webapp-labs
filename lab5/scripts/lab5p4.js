let Song= function (title, artist) {
    this.title = title;
    this.artist = artist;
}

Song.prototype.play = function () {
    console.log("Playing: " + this.title + " by " + this.artist);
};

let song1 = new Song("Cheer up", "Twice");
let song2 = new Song("Hello", "Adele");

song1.play();
song2.play();