function rotateMatrix(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (!newArr[j]?.length) {
                newArr[j] = [arr[i][j]];
            } else {
                newArr[j].unshift(arr[i][j]);
            }
        }
    }

    return newArr;
}

module.exports = {
    rotateMatrix,
};
