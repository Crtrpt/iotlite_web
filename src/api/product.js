import {request} from './request.js';

const product={
    remove:(ctx)=>{
        return request.post("product/remove",ctx);
    },
    info:(ctx)=>{
        return request.get("product/info",ctx);
    },
    list:(ctx)=>{
        return request.get("product/list",ctx);
    },
    all:(ctx)=>{
        return request.get("product/all",ctx);
    },
    allAdapter:(ctx)=>{
        return request.get("product/allAdapter",ctx);
    },
    save:(ctx)=>{
        return request.post("product/save",ctx);
    },
    deviceList:(ctx)=>{
        return request.get("product/deviceList",ctx);
    },
    mapDeviceList:(ctx)=>{
        return request.get("product/mapDeviceList",ctx);
    },
    getSetting:(ctx)=>{
        return request.get("product/getSetting",ctx);
    },
    saveSetting:(ctx)=>{
        return request.post("product/saveSetting",ctx);
    },
    saveModel:(ctx)=>{
        return request.post("product/saveModel",ctx);
    },
    refreshProductKey:(ctx)=>{
        return request.post("product/refreshProductKey",ctx);
    },
    changeTags:(ctx)=>{
        return request.post("product/changeTags",ctx);
    },
    setProductMeta:(ctx)=>{
        return request.post("product/setProductMeta",ctx);
    },
    setProductMetas:(ctx)=>{
        return request.post("product/setProductMetas",ctx);
    },
    versionList:(ctx)=>{
        return request.get("product/version/list",ctx);
    },
    saveNewVersion:(ctx)=>{
        return request.post("product/version/save",ctx);
    },
    allVersion:(ctx)=>{
        return request.get("product/version/all",ctx);
    },
    versionInfo:(ctx)=>{
        return request.get("product/version/query",ctx);
    },
    removeVersion:(ctx)=>{
        return request.post("product/version/remove",ctx);
    }
};

export {
    product
};
