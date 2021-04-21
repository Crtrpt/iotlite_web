import {request} from './request.js';

const auth={
  login:(ctx)=>{
    return request.post("auth/login",ctx);
  },
  register:(ctx)=>{
    return request.post("auth/signup",ctx);
  },
  logout:(ctx)=>{
    return request.post("auth/logout",ctx);
  },
  confirmEmail: (ctx) => {
    return request.post("auth/confirmEmail",ctx);
  },
  resetpassword: (ctx) => {
    return request.post("auth/resetpassword",ctx);
  }
};

export {
  auth
};
