import axios from "axios";

export const getGames = () => {
  // const key = "a7da8537df8b4e75a6065a0d8167857b";
  return (dispatch, getState) => {
    axios
      .get("http://localhost:3001/videogames")
      .then((response) => {
        // console.log(response);

        const data = response.data;
        dispatch({
          type: "GET_GAMES",
          payload: data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const findGame = (game) => {
  return (dispatch, getState) => {
    axios
      .get(`http://localhost:3001/videogames/search?name=${game}`)
      .then((response) => {
        // console.log(response.data);

        const data = response.data;
        dispatch({
          type: "SEARCH_GAME_SUCCESS",
          payload: data
        });
      });
  };
};

export const detailGame = (id) => {
  // console.log(id);
  return (dispatch, getState) => {
    axios
      .get(`http://localhost:3001/videogames/details?id=${id}`)
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        dispatch({
          type: "DETAILS_GAME",
          payload: data
        });
        // console.log(data);
      });
  };
};

export const filterGenres = (genresGame) => async (dispatch) => {
  console.log(genresGame.genres.length);
  const url = "http://localhost:3001/videogames";
  axios.get(url).then((response) => {
    const data = response.data;
    // console.log(data);

    let aux = data.filter((e) => {
      // console.log(e);
      if (
        genresGame.genres.length === undefined ||
        genresGame.genres.length.length < 1
      ) {
        // console.log(1);
        return e;
      } else {
        // console.log(2);
        // console.log(genresGame);
        for (let i = 0; i < genresGame.genres.length; i++) {
          for (let j = 0; j < e.genres.length; j++) {
            // console.log(e.genres[j].name);
            // console.log(
            //   genresGame[i].toLowerCase() === e.genres[j].name.toLowerCase()
            // );
            if (genresGame !== undefined || genresGame.genres.length < 1) {
              // console.log(genresGame.genres[i], e.genres[j].name);
              if (genresGame.genres[i] === e.genres[j].name) {
                return e;
              }
            }
          }
        }
      }
    });
    if (aux.length === 0) {
      aux = [];
    }
    // console.log(aux);
    dispatch({
      type: "FILTER_GENRES",
      payload: aux
    });
  });
};
