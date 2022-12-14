import React from "react";
import "./SongRow.css";

function SongRow({ track }) {
  return (
    <div className="songRow">
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info"></div>
      <h2>{track.name}</h2>
      <p>
        {track.artists.map((artist) => artist.name).join(", ")}
        {track.album.name}
      </p>
    </div>
  );
}

export default SongRow;
