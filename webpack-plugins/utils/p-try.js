const pTry = (fn, ...arguments_) =>
    new Promise(resolve => {
        resolve(fn(...arguments_));
    });

module.exports = pTry;
