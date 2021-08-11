/////////////////////////////////////////// OK
// Function MultiplyTable //
////////////////////////////

function multiplyTable(size) {
    // Hello, like the first step of the exercise i did a 10x10 table by default.
    if(size === undefined){  
        size = 10
    }
    let vertical = []                               // Starting the vertical axis.
    for (let i = 0; i <= size; i++) {               // Doing a for that defines the size of the table.
        let horizontal = []                         // Creating the horizontal axis.
        for(let j = 0; j <=size; j++){              // Doing a for multiply each cell.
            horizontal[j] = j * i                   // The multiplication
        }
        vertical[i] = horizontal                    // Adding the horizontal array
    }
    console.table(vertical)
}
/////////////////////////////////////////