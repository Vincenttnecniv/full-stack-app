import '../App.css';
import React, { useState } from "react";

 function HandleApiData() {
  //The states that pushes to emty array. Exceptions are qeury and media becuase i didn't want to keep
  //entering the and its an good artist.

  const [data, setData] = useState();
  const [query, setQuery] = useState("dax");
  const [media, setMedia] = useState("music");
  const [saveFav, setSaveFav] = useState("");
  const [favourites, setFavourites] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    //Heres where I get the data from server.
    fetch(`http://localhost:3000/music/${query}/${media}`, requestOptions)
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.log("error", error));
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (data !== undefined) {
      //Heres where I set data to favourites.
      if (favourites === "") {
        //No fav selected as of yet
        let newFavArray = [];
        newFavArray.push(data.results[saveFav]);
        console.log(newFavArray);
        setFavourites(newFavArray);
      } else {
        //If fav is selected add to favorites list
        let newFavArray1 = [];
        newFavArray1.push(data.results[saveFav]);
        let updatedFav = favourites.concat(newFavArray1);
        setFavourites(updatedFav);
      }
    }
  };

  const handleSubmit2 = (e) => {
    //Heres where I delete favourites.
    e.preventDefault();
    let deleteFavArray = favourites.toString().split("");
    let newFavArray = [deleteFavArray.splice(1, 1)];
    setFavourites(newFavArray);
  };
  return (
    <div className="App" data-testid="app-1">
      <h1>
        For your media to render please give your qeury and media type below !
      </h1>
      <br />
      <div>
        <br />
        <div>
          <form onSubmit={handleSubmit}>
            {/*Get media and qeury for api */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Query"
            />
            <br />
            <input
              type="text"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              placeholder="Enter Media"
              required
            />
            <br />
            <input type="submit" value="Submit" />

            <br />
            <br />
            <br />
            <br />
            <br />
            <h2>
              The results of your media is displayed below, select your
              favourites !
            </h2>
            <br />
            {data !== undefined ? (
              ({
                /*Displaying data */
              },
              (
                <table>
                  <thead>
                    <tr>
                      <th key={"a"}>Name Of The Artist(s)</th>
                      <th key={"b"}>Name Of The Track</th>
                      <th key={"c"}>URL Link To Song</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.results.map((item) => (
                      <tr key={item.trackId + "d"}>
                        <td key={item.trackId + "e"} className="artistName">
                          {item.artistName}
                        </td>
                        <td key={item.trackId + "f"} className="trackName">
                          {item.trackName}
                        </td>
                        <td key={item.trackId + "g"} className="trackViewUrl">
                          {item.trackViewUrl}
                        </td>
                        <td key={item.trackId + "h"} className="trackID">
                          {item.trackId}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ))
            ) : (
              <p>All data will display here</p>
            )}
          </form>
          <br />
          <br />
          <br />
          <h3>Enter the index of your favorite track (starting from 0)</h3>
          <form onSubmit={handleSubmit1}>
            {/*Saving favourites */}
            <input
              type="number"
              value={saveFav}
              onChange={(e) => setSaveFav(e.target.value)}
              placeholder="Enter fav index"
              required
            />
            <br />
            <br />
            <input type="submit" value="Add" />
          </form>
          <br />
          <br />
          <h3>Press delete to delete all tracks</h3>
          <form onSubmit={handleSubmit2}>
            <input type="submit" value="Delete" />
            {/*Delete favourites*/}
          </form>
          <br />
          <h1>Your favourites</h1>
          <br />
          <br />
          {favourites ? (
            <table>
              <thead>
                <tr>
                  <th key={"i"}>Name Of The Artist(s)</th>
                  <th key={"j"}>Name Of The Track</th>
                  <th key={"k"}>URL Link To Song</th>
                </tr>
              </thead>
              <tbody>
                {favourites.map((item) => (
                  <tr key={item.trackId + "l"}>
                    <td key={item.trackId + "m"} className="artistName">
                      {item.artistName}
                    </td>
                    <td key={item.trackId + "n"} className="trackName">
                      {item.trackName}
                    </td>
                    <td key={item.trackId + "o"} className="trackViewUrl">
                      {item.trackViewUrl}
                    </td>
                    <td key={item.trackId + "p"} className="trackID">
                      {item.trackId}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>All favourites will display here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HandleApiData;