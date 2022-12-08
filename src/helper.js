const isObject = (variable) =>{
    return (
        typeof variable === 'object' &&
        !Array.isArray(variable) &&
        variable !== null
    );
};

const isArray = (variable) => {
    return Array.isArray(variable);
};

const getObjectKeys = (object) => {
    return Object.keys(object);
};

const isJson = (str) => {
    try{
        JSON.parse(str);
    }catch (e){
        return false;
    }

    return true;
}

module.exports = {
    isObject,
    isArray,
    getObjectKeys,
    isJson
};