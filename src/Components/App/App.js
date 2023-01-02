import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import React from "react";

export const firstName = "Justin";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: "name one",
          artist: "artist one",
          album: "almum one",
          id: "id 4",
        },
        {
          name: "name two",
          artist: "artist two",
          album: "album two",
          id: "id two",
        },
        {
          name: "name three",
          artist: "artist three",
          album: "album three",
          id: "id three",
        },
      ],
      playlistName: "Virgo Moon",
      playlistTracks: [
        {
          name: "playlistName1",
          artist: "playlistArtist1",
          album: "playlistAlbum1",
          id: "playlistId1",
        },
        {
          name: "playlistName2",
          artist: "playlistArtist2",
          album: "playlistAlbum2",
          id: "playlistId2",
        },
        {
          name: "playlistName3",
          artist: "playlistArtist3",
          album: "playlistAlbum3",
          id: "playlistId3",
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
