export const userPostFetch = (user) => {
  return async (dispatch) => {
    const resp = await fetch(
      "https://web-laptopp.herokuapp.com/customer/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user }),
      }
    );
    const data = await resp.json();
    if (data.message) {
      alert("Register false");
      console.log("Register false");
    } else {
      localStorage.setItem("token", data.jwt);
      dispatch(loginUser(data.user));
      alert("Register success");
      console.log("Register success");
    }
  };
};

const loginUser = (userObj) => ({
  type: "LOGIN_USER",
  payload: userObj,
});

export const userLoginFetch = (user) => {
  return async (dispatch) => {
    const resp = await fetch(
      "https://web-laptopp.herokuapp.com/customer/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ user }),
      }
    );
    const data = await resp.json();
    if (data.message) {
      alert("Login false");
    } else {
      localStorage.setItem("token", data.jwt);
      dispatch(loginUser(data.user));
      alert("Login success");
    }
  };
};
