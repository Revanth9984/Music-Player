// Node structure for each song
class SongNode {
  constructor(title, file) {
    this.title = title;
    this.file = file;
    this.next = null;
    this.prev = null;
  }
}

// LinkedList Class
class Playlist {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  addSong(title, file) {
    const newNode = new SongNode(title, file);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  playCurrent() {
    if (this.current) {
      document.getElementById('song-title').innerText = this.current.title;
      const audio = document.getElementById('audio');
      audio.src = this.current.file;
      audio.play();
    }
  }

  next() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      this.playCurrent();
    }
  }

  prev() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      this.playCurrent();
    }
  }
}

// Initialize playlist
const playlist = new Playlist();

// Add your songs here (provide actual MP3 paths or URLs)
playlist.addSong("Song 1", "songs/Song1.mp3");
playlist.addSong("Song 2", "songs/Song2.mp3");
playlist.addSong("Song 3", "songs/Song3.mp3");
playlist.addSong("Song 4", "songs/Song4.mp3");
playlist.addSong("Song 5", "songs/Song5.mp3");
// Set current song to head
playlist.current = playlist.head;
playlist.playCurrent();

// Control Functions
function nextSong() {
  playlist.next();
}

function prevSong() {
  playlist.prev();
}
