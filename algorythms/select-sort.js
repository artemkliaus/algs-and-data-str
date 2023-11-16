function selectSort(arr) {
    let sorted = new Set();
    let newArr = arr;

    while(newArr.length > 0) {
        let found = findSmallest(newArr);
        sorted.add(found.smallest);
        newArr.splice(found.ind, 1);
    }

    console.log('SORTED', sorted);

    function findSmallest(arr) {
        let smallest = arr[0];
        let ind = 0;
        arr.forEach((el, i) => {
            if (el < smallest) {
                smallest = el;
                ind = i
            }
        });

        return { smallest, ind };
    }
}


selectSort([15,3,77,88,55,43,576,5,31,56,7]);



module.exports = {
    selectSort,
};
