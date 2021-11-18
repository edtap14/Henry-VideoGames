import axios from "axios";

export const getGames = () => {
  const key = "a7da8537df8b4e75a6065a0d8167857b";
  return (dispatch, getState) => {
    axios
      .get("http://localhost:3001/videogames")
      .then((response) => {
        const data = response.data;
        // console.log(data);
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
// export const getGames = () => async (dispatch) => {
//   const key = "a7da8537df8b4e75a6065a0d8167857b";
//   const response = await fetch(
//     `https://api.rawg.io/api/games?key=${key}&page=1`
//   );
//   // const response = await fetch("http://localhost:3001/videogames");
//   const data = await response.json();

//   dispatch({
//     type: "GET_VIDEOGAMES",
//     payload: data
//   });
// };

// export const getVideoGame = (name) => async (dispatch) => {
//   const response = await fetch("http://localhost:3001/videogames/search");
//   const data = await response.json();
//   dispatch({
//     type: "GET_GAME",
//     game: data
//   });
// };
