// const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let result = 0;
    for (let index = 0; index < matrix.length; index++) {
        const matrixChild = matrix[index];
        const searchingSting = matrixChild.filter(word => word === '^^');
        result += searchingSting.length;

    }
    return result;
};


// // expected output: Array ["exuberant", "destruction", "present"]