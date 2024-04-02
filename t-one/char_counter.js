function countLetters(str) {
    const initialMap = new Map();
    for (const c of str) {
        if (!initialMap.has(c)) {
            initialMap.set(c, 1);
        }
        else {
            initialMap.set(c, initialMap.get(c) + 1);
        }
    }
    const sortedArray = Array
        .from(initialMap)
        .sort()
        .map(item => item[0] + ':' + item[1]);
    return sortedArray.join(',');
}

countLetters('asda');
