function getAllSelectors(line) {
    const tree = JSON.parse(line);
    const selectorsarray = [];

    const bypass = (subTree, selector, isRepeat) => {

        selector.push(subTree['tagName']);
        if (!isRepeat) {
            selectorsarray.push(selector.join('>'));
        }

        if (subTree.children) {
            const childrenTags = {};
            for (const child of subTree.children) {
                if (childrenTags[child.tagName]) {
                    bypass(child, selector, true);
                }
                else {
                    childrenTags[child.tagName] = true;
                    bypass(child, selector, false);
                }
            }
        }
        selector.pop();
    };

    bypass(tree, [], false);
    return selectorsarray.sort().join(',');
}

console.log(getAllSelectors('{"tagName":"ASIDE","children":[{"tagName":"DIV","children":[{"tagName":"SPAN"}]},{"tagName":"DIV"}]}'));
console.log(getAllSelectors('{"tagName":"A"}'));
