const removeFromArray = function(passedArrays,...args) {
    let realArray = [];
    for (let i = 0; i < passedArrays.length; i++ ) {
        
        if (!args.includes(passedArrays[i])) {
            realArray.push(passedArrays[i]);         
        }
        
    }
return realArray


    
    
};

// Do not edit below this line
module.exports = removeFromArray;
