let firstElement = {
    value: 42,
    next: null
};

let secondElement = {
    value: 43,
        next: null
};

let thirdElement = {
    value: 44,
        next: null
};

secondElement.next = thirdElement;

firstElement.next = secondElement;

console.log(firstElement);