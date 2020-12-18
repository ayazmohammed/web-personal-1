// Functions

//Declare a standard function
function myFunction() {

}

function greeting() {
    console.log("Hello World");
}

//Calling a function
greeting();

function getReminder() {
    console.log('Go to bed');
}

getReminder();

if (true) {
    console.log("The if condition ran");
}

function ifFunc() {
    if (true) {
        console.log("The if condition ran from a function");
    }
}

ifFunc();

//Function returns
// Functions carry out a set of instructions and return values if you want them to using the 'return' keyword.
function billTotal() {
    let steak = 10.99;
    let chips = 4.00;

    return steak + chips;
}

let total = 14.99;
total = billTotal();

console.log(total);

//Function parameters
// Functions can paramters passed in as data to be used in the instructions. Also known as 'arguements'

function billTotal2(number1, number2) {
    return number1 + number2;
}

let total2 = billTotal2(10.99, 7.00);

console.log(total2);

// Object - are a data type
//Object have properties and key. Key value pairs. 
// Objects have multiple properties with multiple data types, objects can be nested within each other
let ayaz = {
    'name': 'Ayaz',
    'age': 10,
    'hairColour': 'black',
    'birthday': {
        'day': 'Tuesday',
        'month': 'March'
    },
    'array': [23, 34, 56]
};

ayaz.age = 20;

console.log(ayaz.birthday.day); // Use dot notation to get children in an object

//Example of using funtions as a utility device
let orders = [
    {
       'orderNum': 1234,
       'order': [
           {
               'name': 'Steak',
               'price': 10.99
           },
           {
            'name': 'Chips',
            'price': 4.00
            }
       ]
    },
    {
        'orderNum': 5678,
        'order': [
            {
                'name': 'Steak',
                'price': 10.99
            },
            {
             'name': 'Carrots',
             'price': 7.50
            }
        ]
     }
];

function calculateBill(order) {
    let items = order.order;
    let total = 0;

    for (var i =0; i < items.length; i++) {
        let item = items[i];
        total += item.price;
    }

    return total;
}

console.log(calculateBill(orders[0]));



