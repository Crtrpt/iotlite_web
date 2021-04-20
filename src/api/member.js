import {request} from './request.js';

const member={
  list:(ctx)=>{
    return request.get("member/list",ctx);
  }
};

export {
  member
};
