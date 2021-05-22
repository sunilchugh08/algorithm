function nextNumber() {
    let mySet = new Set();
    let numberSeen = false;
    for (let i = 0; i < 100; i++) {
        let numberPrinted;
        if (!numberSeen) {
            console.log(0);
            numberPrinted = 0;

        } else {
            console.log(i); numberPrinted = i;
        }
        numberSeen = mySet.has(numberPrinted);
        mySet.add(i);
    }
}

nextNumber();