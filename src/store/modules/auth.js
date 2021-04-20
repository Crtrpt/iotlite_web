// initial state
var state = {
  isLogin:false,
  user:{
    name:"",
  }
};

// getters
var getters = {
  username:(state)=>{
    return state.user.name;
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
    state.user=payload.data.user;
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