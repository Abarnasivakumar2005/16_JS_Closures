// Level 1

// Create a closure which has one inner function

// Level 2

// Create a closure which has three inner functions

// Level 3

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.



// Level 1: Closure with One Inner Function
function createClosure() {
    const secret = "This is a secret message.";
    
    function innerFunction() {
        console.log(secret);
    }
    
    return innerFunction; // Return the inner function
}

const myClosure = createClosure();
myClosure(); // Outputs: This is a secret message.

// Level 2: Closure with Three Inner Functions
function createMultiClosure() {
    let value = 0; // Changed to let to allow modification
    
    function increment() {
        value += 1;
        return value;
    }
    
    function decrement() {
        value -= 1;
        return value;
    }
    
    function reset() {
        value = 0;
        return value;
    }
    
    return { increment, decrement, reset }; // Return all inner functions
}

const counter = createMultiClosure();
console.log(counter.increment()); // Outputs: 1
console.log(counter.decrement()); // Outputs: 0
console.log(counter.reset());      // Outputs: 0

// Level 3: Person Account Function
function personAccount(firstname, lastname) {
    const incomes = [];
    const expenses = [];
    
    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }
    
    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }
    
    function totalIncome() {
        return incomes.reduce((total, income) => total + income.amount, 0);
    }
    
    function totalExpense() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }
    
    function accountInfo() {
        return `${firstname} ${lastname} has a total income of ${totalIncome()} and total expenses of ${totalExpense()}.`;
    }
    
    function accountBalance() {
        return totalIncome() - totalExpense();
    }
    
    return {
        addIncome,
        addExpense,
        totalIncome,
        totalExpense,
        accountInfo,
        accountBalance
    };
}

// Example Usage
const myAccount = personAccount("John", "Doe");
myAccount.addIncome("Salary", 5000);
myAccount.addExpense("Rent", 1500);
myAccount.addExpense("Groceries", 300);

console.log(myAccount.accountInfo()); // Outputs: John Doe has a total income of 5000 and total expenses of 1800.
console.log("Account Balance:", myAccount.accountBalance()); // Outputs: Account Balance: 3200
