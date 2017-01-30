// Example Album
var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
};
 
// Another Example Album
var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
};

var albumNas = {
     title: 'Illmatic',
     artist: 'Nas',
     label: 'Columbia Records',
     year: '1994',
     albumArtUrl: 'assets/images/album_covers/19.png',
     songs: [
         { title: 'The Genesis', duration: '1:45' },
         { title: 'N.Y. State of Mind', duration: '4:53' },
         { title: "Life's a Bitch", duration: '3:30'},
         { title: 'The World Is Yours', duration: '4:50' },
         { title: 'Halftime', duration: '4:20'},
         { title: "Memory Lane (Sittin' in da Park)", duration: '4:08'},
         { title: 'One Love', duration: '5:25'},
         { title: 'One Time 4 Your Mind', duration: '3:18'},
         { title: 'Represent', duration: '4:12'},
         { title: "It Ain't Hard To Tell", duration: '3:22'}
     ]
};

// put getSongItem function here

// Generates song row content
var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     var $row = $(template);
     
     var clickHandler = function() {
         var songNumber = $(this).attr('data-song-number');
         if (currentlyPlayingSong !== null) {

// Revert to song number for currently playing song because user started playing new song.
         var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingCell.html(currentlyPlayingSong);
	    }
            if (currentlyPlayingSong !== songNumber) {
             // Switch from Play -> Pause button to indicate new song is playing.
            $(this).html(pauseButtonTemplate);
		          currentlyPlayingSong = songNumber;
             
	       } else if (currentlyPlayingSong === songNumber) {
// Switch from Pause -> Play button to pause currently playing song.
             $(this).html(playButtonTemplate);
		          currentlyPlayingSong = null;
	    }
     };
    
     var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
     };
     
     var offHover = function(event) {
         ar songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
     };
     
     // #1
     $row.find('.song-item-number').click(clickHandler);
     // #2
     $row.hover(onHover, offHover);
     // #3
     return $row;
};

// Selects elements and populates by text
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

// Calls when window loads
var setCurrentAlbum = function(album) {
     // Assign values to each part of the album (text, images)
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // Clear contents of album song list container
     albumSongList.innerHTML = '';
 
     // Build list of songs from album Javascript object
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
<<<<<<< HEAD
 };
 
 $(document).ready(function() {
=======
};

var clickHandler = function(targetElement) {  
    var songItem = getSongItem(targetElement);
        if (currentlyPlayingSong === null) {
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
         songItem.innerHTML = playButtonTemplate;
         currentlyPlayingSong = null;
     } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
         var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
         currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
         songItem.innerHTML = pauseButtonTemplate;
         currentlyPlayingSong = songItem.getAttribute('data-song-number');
     }
};

// Elements to which we'll be adding listeners
var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
var songRows = document.getElementsByClassName('album-view-song-item');
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
// Store state of playing songs
var currentlyPlayingSong = null;

 window.onload = function() {
>>>>>>> Scripting
     setCurrentAlbum(albumPicasso);
     // Elements to which we'll be adding listeners
     songListContainer.addEventListener('mouseover', function(event) {
         
     });
        for (var i = 0; i < songRows.length; i++) {
         songRows[i].addEventListener('mouseleave', function(event) {
          var songItem = getSongItem(event.target);
             var songItemNumber = songItem.getAttribute('data-song-number');
 
             // #2
             if (songItemNumber !== currentlyPlayingSong) {
                 songItem.innerHTML = songItemNumber;
             }   
     });
             } 
         songRows[i].addEventListener('click', function(event) {
             
             clickHandler(event.target); // Event handler call
     });
     
        if (event.target.parentElement.className === 'album-view-song-item') {
             // Change the content from the number to the play button's HTML
             event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
         }
     };
    
    var albums = [albumPicasso, albumMarconi, albumNas];
    var index = 1;
    albumImage.addEventListener("click", function(event) {
        setCurrentAlbum(album[index]);
        index++;
        if (index == album.length) {
            index = 0;
        }
    });