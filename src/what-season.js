const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (isNaN(date) || !date) {
        return 'Unable to determine the time of year!';
    }
    if (date instanceof Date === false) {
        throw Error();
    }
    let curentSeason = new Date(date).getMonth();
    if (curentSeason === 0 || curentSeason === 1 || curentSeason === 11) {
        return 'winter';
    }
    if (curentSeason === 2 || curentSeason === 3 || curentSeason === 4) {
        return 'spring';
    }
    if (curentSeason === 5 || curentSeason === 6 || curentSeason === 7) {
        return 'summer';
    }
    if (curentSeason === 8 || curentSeason === 9 || curentSeason === 10) {
        return 'autumn';
    }
    return curentSeason;
};