import {request} from './request.js';

const team={
  remove:(ctx)=>{
    return request.post("team/remove",ctx);
  },
  info:(ctx)=>{
    return request.get("team/info",ctx);
  },
  list:(ctx)=>{
    return request.get("team/list",ctx);
  },
  all:(ctx)=>{
    return request.get("team/all",ctx);
  },
  listOfOwner:(ctx)=>{
    return request.get("team/listofOwner",ctx);
  },
  save:(ctx)=>{
    return request.post("team/save",ctx);
  },
  memberlist:(ctx)=>{
    return request.post("team/memberlist",ctx);
  }
};

export {
  team
};
