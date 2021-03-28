import {request} from './request.js';

const hook={
    save:(ctx)=>{
        return request.post("hook/save",ctx);
    },
};

export {
    hook
};
