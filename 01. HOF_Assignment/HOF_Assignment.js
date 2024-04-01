/**
 * You are building an e-commerce website.
 * Write a function that calculates the total price of a customer's order.
 * You're given an array of items, each with a price property.
 */

const ordersList = [
  { name: "Laptop", price: 120000 },
  { name: "Mobile", price: 70000 },
  { name: "Mobile Charger", price: 1500 },
  { name: "Laptop Charger", price: 10500 },
];

function calculateTotalPrice(items) {
  let totalPrice = 0;

  items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}

const total = calculateTotalPrice(ordersList);
console.log("Total Price: Rs", total);

/**
 * In this challenge, your task is to create a function that generates a random number and prints it to the
 * console every 2 seconds.
 * The program should keep printing new random numbers indefinitely, with a 2 seconds delay between each number.
 */

setInterval(() => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
}, 2000);

/**
 * You are given an array of expense objects representing monthly expenses.
 * Each object has properties, amount and category.
 * Use the map method to create a new array that includes the calculated tax for each expense.
 * Assume a tax rate of 10%.
 */

let expenses = [
  { amount: 100, category: "Utilities" },
  { amount: 200, category: "Groceries" },
  { amount: 50, category: "Entertainment" },
];

const afterTaxExpenses = expenses.map((expense) => {
  return {
    amount: (expense.amount * 1.1).toFixed(2),
    category: expense.category,
  };
});

console.log(afterTaxExpenses);

/**
 * Using the same array of expense objects, use the filter method to create a new array that includes only
 * the expenses related to the category "Groceries."
 */

const afterFilter = expenses.filter((expense) => {
  if (expense.category === "Groceries") {
    return {
      amount: expense.amount,
      category: expense.category,
    };
  }
});

console.log(afterFilter);

// 5. Using the same array of expense objects, use the reduce method to calculate the total amount of all expenses.

const afterReduce = expenses.reduce((sum, expense) => {
  return (sum += expense.amount);
}, 0);

console.log(afterReduce);

/*
 * 6. You have a list of expenses, each with an amount and a category. Now, create a function named
 * categorizeExpense that, based on the expense amount, returns either "High Expense" if it's more than 100, or
 * "Low Expense" otherwise. Afterward, use this function along with the map method to generate a new array
 * called categorizedExpenses, where each element represents the category for the corresponding expense in
 * the original list. Finally, print out the categorizedExpenses array.
 */

function categorizeExpense(expenses) {
  return expenses.map((expense) => ({
    amount: expense.amount > 100 ? "High Expense" : "Low Expense",
    category: expense.category,
  }));
}

console.log(categorizeExpense(expenses));

/*
 * 7. Consider an array of numbers named originalNumbers with the values [2, 5, 8, 10, 3].
 * Your task is to use the forEach method to iterate through each element in the array.
 * During the iteration, double the value of each number.
 * After completing the iteration, display the modified array.
 */

let originalNumbers = [2, 5, 8, 10, 3];

originalNumbers.forEach((num, index) => {
  originalNumbers[index] = num * 2;
});

console.log(originalNumbers);

// 8. Using the same array of numbers, use the forEach method to collect and store only the even numbers in a new array.
originalNumbers = [2, 5, 8, 10, 3];
const newArray = [];

originalNumbers.forEach((num) => {
  if (num % 2 === 0) {
    newArray.push(num);
  }
});

console.log(newArray);
