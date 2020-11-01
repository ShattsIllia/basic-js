const { fakeServer } = require("sinon");
const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if ((typeof sampleActivity === 'string') && (sampleActivity > 0) && (sampleActivity < 15)) {
        return Math.ceil(Math.log2(MODERN_ACTIVITY / sampleActivity) / (0.693 / HALF_LIFE_PERIOD))
    }
    return false;
};