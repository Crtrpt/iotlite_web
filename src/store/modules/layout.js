// initial state
var state = {
  showLeftMenu:true
};

// getters
var getters = {
  showLeftMenu:(state)=>{
    return state.showLeftMenu;
  }
};


// mutations
var mutations = {
  toggleMenu(state){
    state.showLeftMenu=!state.showLeftMenu
    console.log( state.showLeftMenu)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations
}