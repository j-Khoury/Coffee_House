export const loginSuccess = user => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});
export const signUpSuccess = user => ({
  type: 'SIGNUP_SUCCESS',
  payload: user,
});

export const loginFailure = error => ({
  type: 'LOGIN_FAILURE',
  payload: error,
});

export const logout = () => ({
  type: 'LOGOUT',
});
