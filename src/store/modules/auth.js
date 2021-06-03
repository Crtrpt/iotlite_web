// initial state

var state = {
  isLogin:false,
  user:{
    name: "",
    avatar: "",
  }
};

if (window.localStorage.auth !== undefined) {
  state = JSON.parse(window.localStorage.auth);
}

// getters
var getters = {
  username:(state)=>{
    return state.user.name;
  },
  avatar: (state) => {
    return state.user.avatar;
  }
};

// actions
var actions = {
};

// mutations
var mutations = {
  login(state,payload){
    state.isLogin=true;
    state.token=payload.data.token;
    state.user = payload.data.user;
    window.localStorage.auth = JSON.stringify(state);
  },
  logout(state){
    state.isLogin=false;
    state.token=null;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};