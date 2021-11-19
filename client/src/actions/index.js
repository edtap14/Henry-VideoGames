import axios from "axios";

export const getGames = (page) => {
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

// export const prev = () => {
//   return (dispatch, getState) => {
//     axios.get("http://localhost:3001/videogames")
//     .then((response) => {
//       // console.log(response);
//       const linkPrev = response.data;
//       dispatch({
//         type: "PREV_PAGE",
//         payload: linkPrev
//       });
//     });
//   };
// };

// export const next = () => {
//   return (dispatch, getState) => {
//     axios.get("http://localhost:3001/videogames").then((response) => {
//       // console.log(response);
//       const linkNext = response.data.next;
//       dispatch({
//         type: "NEXT_PAGE",
//         payload: linkNext
//       });
//     });
//   };
// };

// export const getVideoGame = (name) => async (dispatch) => {
//   const response = await fetch("http://localhost:3001/videogames/search");
//   const data = await response.json();
//   dispatch({
//     type: "GET_GAME",
//     game: data
//   });
// };
