// Task 3

function getElementWidth(content, padding, border) {
    // Remove "px" from the strings and convert to integers
    const contentWidth = parseInt(content);
    const paddingWidth = parseInt(padding);
    const borderWidth = parseInt(border);
    // Calculate the total width (including padding and border)
    const totalWidth = contentWidth + 2 * paddingWidth + 2 * borderWidth;

    return totalWidth;
}

// Сode to check for correct operation
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200
