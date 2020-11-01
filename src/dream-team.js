const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    } else if (members.length === 0) {
        return members;
    } else {
        return members
            .filter((value) => typeof value === 'string')
            .map((value) => value.trim())
            .map((value) => value[0].toUpperCase())
            .sort()
            .join('');
    }
};