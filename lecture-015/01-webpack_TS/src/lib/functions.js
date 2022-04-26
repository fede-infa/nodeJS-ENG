const getTime = () =>{
    let date = new Date().toLocaleString();
    let timestamp = Date.now();
    return {date, timestamp};
};

module.exports = {
    getTime
}