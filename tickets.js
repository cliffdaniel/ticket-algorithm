function tickets(bills) {
    let count25 = 0;
    let count50 = 0;

    for (const bill of bills) {
        if (bill === 25) {
            count25++;
        } else if (bill === 50) {
            if (count25 === 0) return 'NO';
            count25--;
            count50++;
        } else if (bill === 100) {
            if (count50 > 0 && count25 > 0) {
                count50--;
                count25--;
            } else if (count25 >= 3) {
                count25 -= 3;
            } else {
                return 'NO';
            }
        }
    }
    return 'SI';
}

module.exports = { tickets };