const removeFromArray = function(list, ...args) {
    const resultArray = []; 
    const itemsToRemove = [...args];
    for (const item of list) {
        if (itemsToRemove.includes(item)) {
            continue;
        };
        resultArray.push(item);
    };
    return resultArray
    
};

// Do not edit below this line
module.exports = removeFromArray;
