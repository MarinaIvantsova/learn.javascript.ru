/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
/*
Remove duplicate tracks

Task 1. Implement the removeDuplicates function,
which takes a playlist as a parameter and returns a new playlist where all the tracks are unique.
*/
function removeDuplicates(playlist) {
    return [...new Set(playlist)];
  }
//   const playlist = [
//     'Court and Spark - Joni Mitchell',
//     'Big Yellow Taxi - Joni Mitchell',
//     'Court and Spark - Joni Mitchell',
//   ];

//   removeDuplicates(playlist);
//=> ['Court and Spark - Joni Mitchell', 'Big Yellow Taxi - Joni Mitchell']

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
/*
Task 2. Implement the hasTrack function,
which takes a playlist and a track as parameters and
returns a boolean that indicates whether the playlist contains the track.
*/
   function hasTrack(playlist, track) {
    return new Set(playlist).has(track);
  }
//   const playlist = [
//     'The Fashion Show - Grace Jones',
//     'Dr. Funkenstein - Parliament',
//   ];

//   hasTrack(playlist, 'Dr. Funkenstein - Parliament');
//   //=> true

//   hasTrack(playlist, 'Walking in the Rain - Grace Jones');
//=> false

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
/*
Task 3. Implement the addTrack function,
which takes a playlist and a track as parameters and returns a new playlist that includes the track.
*/
   function addTrack(playlist, track) {
    return [...new Set(playlist).add(track)];
  }
//   const playlist = ['Selma - Bijelo Dugme'];

// addTrack(playlist, 'Atomic Dog - George Clinton');
// //=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']

// addTrack(playlist, 'Selma - Bijelo Dugme');
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
/*
Task 4. Implement the deleteTrack function, which takes a playlist and
a track as parameters and returns a new playlist that does not include the track.
*/
function deleteTrack(playlist, track) {
    let playlistAfterDelete = new Set(playlist);
    playlistAfterDelete.delete(track);
    return [...playlistAfterDelete];
}
//   const playlist = [
//     'The Treasure - Fra Lippo Lippi',
//     'After the Fall - Klaus Nomi',
//   ];

deleteTrack(playlist, 'The Treasure - Fra Lippo Lippi');
//=> ['After the Fall - Klaus Nomi']

deleteTrack(playlist, 'I Feel the Magic - Belinda Carlisle');
//=> ['After the Fall - Klaus Nomi']

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
/*
Task 5. Implement the listArtists function, which takes a playlist as a parameter and
returns the list of unique artists in the playlist.
Note that the names of the tracks are formatted like <SONG> - <ARTIST>.
*/
function listArtists(playlist) {
    let newSet = new Set();
    for (const item of new Set(playlist)) {
        newSet.add(item.split("- ")[1]);
    }
    return [...newSet];
}
const playlist = [
    'All Mine - Portishead',
    'Sight to Behold - Devendra Banhart',
    'Sour Times - Portishead',
];

listArtists(playlist);
  //=> ['Portishead', 'Devendra Banhart']
