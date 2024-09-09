export const initialState = {
  isAuthenticated: !!localStorage.getItem("accessToken"),
};

export function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("accessToken", action.payload);
      return { ...state, isAuthenticated: true };
    case "LOGOUT":
      localStorage.removeItem("accessToken");
      return { ...state, isAuthenticated: false };
    default:
      return state;
  }
}
