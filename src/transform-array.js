const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw CustomError();
    }
    const discardNnextIndex = (element) => element === '--discard-next';
    const discardPrevIndex = (element) => element === '--discard-prev';
    const doubleNextIndex = (element) => element === '--double-next';
    const doublePrevIndex = (element) => element === '--double-prev';
    let newArr = [...arr];

    if (newArr.includes('--double-next')) {
        const doubleIndexNext = newArr.findIndex(doubleNextIndex);
        const firstPart = newArr.slice(0, doubleIndexNext);
        //console.log(firstPart);
        const secondPart = newArr.slice(doubleIndexNext + 1);
        //console.log(secondPart);
        firstPart.push(newArr[doubleIndexNext + 1], ...secondPart);
        newArr = [...firstPart];

    }
    if (newArr.includes('--discard-next')) {
        // console.log('Dano Array', newArr);
        const discardIndex = newArr.findIndex(discardNnextIndex);
        // console.log('Vivel Index discardnexta', discadIndex);
        newArr.splice(discardIndex, 2, null);
        // console.log('Vivel Noviy ArRay', newArr);
    }
    if (newArr.includes('--discard-prev')) {
        const discardIndexPrev = newArr.findIndex(discardPrevIndex);
        //console.log('DISCARD PREV INDEX ', discardIndexPrev);
        if (discardIndexPrev === 0) {
            newArr.splice(discardIndexPrev, 1, null);
        } else {
            newArr.splice(discardIndexPrev - 1, 2, null);
        }
        //console.log(newArr)
    }

    if (newArr.includes('--double-prev')) {
        const doubleIndexPrev = newArr.findIndex(doublePrevIndex);
        const firstPart = newArr.slice(0, doubleIndexPrev);
        //console.log(firstPart);
        const secondPart = newArr.slice(doubleIndexPrev + 1);
        //console.log(secondPart);

        firstPart.push(newArr[doubleIndexPrev - 1], ...secondPart);
        newArr = [...firstPart];


    }
    //console.log(newArr);
    return newArr.filter((element) => (element !== null) && (typeof element !== 'undefined'));
};