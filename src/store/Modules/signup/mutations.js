export default{
    setUserTokenData(state,payload) {
        state.role = payload.role;
        state.password = payload.password
        state.token = payload.token;
        state.username = payload.username;
    },

    setError(state,payload) {
        state.error = payload.error;
        state.errorMessage = payload.errorMessage
    },

  
}