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
