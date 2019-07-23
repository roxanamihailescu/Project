function MusicPlayer(initialPlaylist = []) {
  this.playlist = initialPlaylist;
  this.play = function(position = 0) {
    console.log("Now playing: ", this.playlist[position]);
  };
}

var playlist = [
  "Nicu Alifantis - Spala rana",
  "Dan Ciotoi - S-a rupt lantul de iubire",
  "Drake - Fructul Pasiunii"
];
var SporifyU = new MusicPlayer(playlist);
SporifyU.play();

//urmatorul exemplu cu alta proprietate//

function MusicPlayer(initialPlaylist = []) {
  this.playlist = initialPlaylist;
  this.currentlyPlaying = this.playlist[0];
  this.play = function(position = 0) {
    this.currentlyPlaying = this.playlist[position];
    console.log("Now playing: ", this.playlist[position]);
  };
  this.addToPlaylist = function(melodie) {
    this.playlist.push(melodie);
    console.log("Added to playlist:", melodie);
  };

  this.removeFromPlaylist = function(melodie) {
    var position = this.playlist.indexOf(melodie);
    this.playlist.splice(position, 1);
  };

  this.showPlaylist = function() {
    console.log("===== Playlist ====");
    this.playlist.forEach(function(value) {
      console.log(value);
    });
    console.log("===== End of Playlist ====");
  };
}

var playlist = [
  "Nicu Alifantis - Spala rana",
  "Dan Ciotoi - S-a rupt lantul de iubire",
  "Drake - Fructul Pasiunii"
];
var SporifyU = new MusicPlayer(playlist);
// SporifyU.play(2);
SporifyU.addToPlaylist("Macanache - Sefu");
// SporifyU.showPlaylist();
SporifyU.removeFromPlaylist("Drake - Fructul Pasiunii");
SporifyU.showPlaylist();


/// alt exemplu mai simplu///
function MusicPlayer(initialPlaylist = []) {
  this.playlist = initialPlaylist;
  this.currentlyPlaying = this.playlist[0];
  this.play = function(position = 0) {
    this.currentlyPlaying = this.playlist[position];
    console.log("Now playing: ", this.playlist[position]);
  };
  this.addToPlaylist = function(melodie) {
    this.playlist.push(melodie);
    console.log("Added to playlist:", melodie);
  };

  this.removeFromPlaylist = function(melodie) {
    this.playlist = this.playlist.filter(function(value) {
      return value !== melodie;
    });
  };

  this.showPlaylist = function() {
    console.log("===== Playlist ====");
    this.playlist.forEach(function(value) {
      console.log(value);
    });
    console.log("===== End of Playlist ====");
  };
}

var playlist = [
  "Nicu Alifantis - Spala rana",
  "Dan Ciotoi - S-a rupt lantul de iubire",
  "Drake - Fructul Pasiunii"
];
var SporifyU = new MusicPlayer(playlist);
// SporifyU.play(2);
SporifyU.addToPlaylist("Macanache - Sefu");
// SporifyU.showPlaylist();
SporifyU.removeFromPlaylist("Drake - Fructul Pasiunii");
SporifyU.showPlaylist();
//////////alt exemplu/////////
function MusicPlayer(initialPlaylist = []) {
  this.playlist = initialPlaylist;
  this.currentlyPlaying = this.playlist[0];
  this.play = function(position = 0) {
    this.currentlyPlaying = this.playlist[position];
    console.log("Now playing: ", this.playlist[position]);
  };
  this.addToPlaylist = function(melodie) {
    this.playlist.push(melodie);
    console.log("Added to playlist:", melodie);
  };

  this.removeFromPlaylist = function(melodie) {
    this.playlist = this.playlist.filter(function(value) {
      return value !== melodie;
    });
  };

  this.showPlaylist = function() {
    console.log("===== Playlist ====");
    this.playlist.forEach(function(value) {
      console.log("*", value);
    });
    console.log("===== End of Playlist ====");
  };

  this.nextTrack = function() {
    var currentPosition = this.playlist.indexOf(this.currentlyPlaying);
    var nextPosition = currentPosition + 1;
    console.log("Next Track is: ", this.playlist[nextPosition]);
  };
}

var playlist = [
  "Nicu Alifantis - Spala rana",
  "Dan Ciotoi - S-a rupt lantul de iubire",
  "Drake - Fructul Pasiunii"
];
var SporifyU = new MusicPlayer(playlist);
SporifyU.addToPlaylist("Macanache - Sefu");
console.log("Now Playing: ", SporifyU.currentlyPlaying);
SporifyU.play(2);
SporifyU.nextTrack();
// console.log("Now Playing: ", SporifyU.currentlyPlaying);
// SporifyU.showPlaylist();
// SporifyU.removeFromPlaylist("Drake - Fructul Pasiunii");
// SporifyU.showPlaylist();
///if else ///
function MusicPlayer(initialPlaylist = []) {
  this.playlist = initialPlaylist;
  this.currentlyPlaying = this.playlist[0];
  this.play = function(position = 0) {
    this.currentlyPlaying = this.playlist[position];
    console.log("Now playing: ", this.playlist[position]);
  };
  this.addToPlaylist = function(melodie) {
    this.playlist.push(melodie);
    console.log("Added to playlist:", melodie);
  };

  this.removeFromPlaylist = function(melodie) {
    this.playlist = this.playlist.filter(function(value) {
      return value !== melodie;
    });
  };

  this.showPlaylist = function() {
    console.log("===== Playlist ====");
    this.playlist.forEach(function(value) {
      console.log("*", value);
    });
    console.log("===== End of Playlist ====");
  };

  this.nextTrack = function() {
    var currentPosition = this.playlist.indexOf(this.currentlyPlaying);
    var nextPosition = currentPosition + 1;
    if (nextPosition > this.playlist.length - 1) {
      console.log("Next Track is: ", this.playlist[0]);
    } else {
      console.log("Next Track is: ", this.playlist[nextPosition]);
    }
  };
}

var playlist = [
  "Nicu Alifantis - Spala rana",
  "Dan Ciotoi - S-a rupt lantul de iubire",
  "Drake - Fructul Pasiunii"
];
var SporifyU = new MusicPlayer(playlist);
// SporifyU.addToPlaylist("Macanache - Sefu");
console.log("Now Playing: ", SporifyU.currentlyPlaying);
SporifyU.play(2);
SporifyU.nextTrack();
// console.log("Now Playing: ", SporifyU.currentlyPlaying);
// SporifyU.showPlaylist();
// SporifyU.removeFromPlaylist("Drake - Fructul Pasiunii");
// SporifyU.showPlaylist();


//ssss//
function MusicPlayer(initialPlaylist = []) {
  this.playlist = initialPlaylist;
  this.currentlyPlaying = this.playlist[0];
  this.play = function(position = 0) {
    this.currentlyPlaying = this.playlist[position];
    console.log("Now playing: ", this.playlist[position]);
  };
  this.addToPlaylist = function(melodie) {
    this.playlist.push(melodie);
    console.log("Added to playlist:", melodie);
  };

  this.removeFromPlaylist = function(melodie) {
    this.playlist = this.playlist.filter(function(value) {
      return value !== melodie;
    });
  };

  this.showPlaylist = function() {
    console.log("===== Playlist ====");
    this.playlist.forEach(function(value) {
      console.log("*", value);
    });
    console.log("===== End of Playlist ====");
  };

  this.nextTrack = function() {
    var currentPosition = this.playlist.indexOf(this.currentlyPlaying);
    var nextPosition = currentPosition + 1;
    if (nextPosition > this.playlist.length - 1) {
      console.log("Next Track is: ", this.playlist[0]);
    } else {
      console.log("Next Track is: ", this.playlist[nextPosition]);
    }
  };
}

var playlist = [
  "Nicu Alifantis - Spala rana",
  "Dan Ciotoi - S-a rupt lantul de iubire",
  "Drake - Fructul Pasiunii"
];
var SporifyU = new MusicPlayer(playlist);
// SporifyU.addToPlaylist("Macanache - Sefu");
console.log("Now Playing: ", SporifyU.currentlyPlaying);
SporifyU.play(2);
SporifyU.nextTrack();
// console.log("Now Playing: ", SporifyU.currentlyPlaying);
// SporifyU.showPlaylist();
// SporifyU.removeFromPlaylist("Drake - Fructul Pasiunii");
// SporifyU.showPlaylist();
///o noua functie bind///
function greet() {
  console.log(this.name);
}

var obj = {
  name: "Rox"
};

var newGreet = greet.bind(obj);
newGreet();
// greet();
///exemplu Roxana bind//
var obj = {
  name: "Bogdan"
};

function greet() {
  console.log(this.name);
}

// var greetRoxana = greet.bind(obj);
// greetRoxana();
greet();
greet.call(obj);

//functia call si apply//
var obj = {
  name: "Bogdan"
};

function greet() {
  console.log(this.name);
}

function fn(p1, p2) {
  console.log(this.name, p1, p2);
}

// var greetRoxana = greet.bind(obj);
// greetRoxana();
// greet.apply(obj)

fn.call(obj, 2, "Ion");
fn.apply(obj, [2, "Ion"]);



