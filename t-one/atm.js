function atm(line) {
    if (line === '') {
        return '';
    }

    const nominals = [100, 50, 10, 5, 1];

    const lineParts = line.split(';');
    const requiredSum = +lineParts[0];

    if (requiredSum === 0) {
        return '';
    }

    const noteCounts = new Map(lineParts[1]
        .split(',')
        .map(item => item.split(':'))
        .map(item => [+item[0], +item[1]]));

    let result_nominals = [];
    let remainder = requiredSum;
    let isFound = false;
    while (noteCounts.size > 0) {
        let max_key = Math.max(...[...noteCounts].map(item => item[0]));


        if (noteCounts.get(max_key) == 0) {
            noteCounts.delete(max_key);
            continue;
        }

        if (remainder - max_key == 0) {
            result_nominals.push(max_key);
            isFound = true;
            break;
        }
        else if (remainder - max_key < 0) {
            noteCounts.delete(max_key);
        }
        // remainder - max_key > 0
        else {
            remainder -= max_key;

            noteCounts.set(max_key, noteCounts.get(max_key) - 1);
            if (noteCounts.get(max_key) == 0) {
                noteCounts.delete(max_key);
            }

            result_nominals.push(max_key);
        }
    }

    if (isFound) {
        const initialMap = new Map();
        for (const note of result_nominals) {
            if (!initialMap.has(note)) {
                initialMap.set(note, 1);
            }
            else {
                initialMap.set(note, initialMap.get(note) + 1);
            }
        }
        const sortedArray = Array
            .from(initialMap)
            .sort((a, b) => a[0] - b[0])
            .map(item => item[0] + ':' + item[1]);

        return sortedArray.join(',');
    }
    else {
        return 'Error: Not enough money';
    }
}

console.log(atm("114;1:6,5:0,10:1,50:5,100:2"));
console.log(atm("78;1:7,5:5,10:3,50:6,100:2"));
console.log(atm("143;1:8,5:9,10:7,50:6,100:2"));//1:3,10:4,100:1
