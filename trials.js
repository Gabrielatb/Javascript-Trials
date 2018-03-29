 // ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();




// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function accountInfo(name, number, business) {
    console.log(`Account Holder Name: ${name}`);
    console.log(`Account Holder Name: ${number}`);
    console.log(`Account Holder Name: ${business}`);
}
// Add function to print all addresses, including a header
function showAddresses(addresses){
    console.log('Addresses');
    for (let address of addresses){
        console.log(`${address}`);
    }


}

// Add function to print phone types and numbers
function showPhoneNums(number){
    console.log('Phone Numbers');
    for(let phoneNumber of phoneNumbers){
        console.log(`${phoneNumber[0]}: ${phoneNumber[1]}`);
    }

}


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const transactions = new Map();
const startingBalance = 26000

// Add function to add transactions
function addTransaction(date, amount){
    transactions.set (date, amount);  

}

// Use the function to add transactions
transactions.set('May-2', -500);
transactions.set('May-13', 1200);
transactions.set('May-15', -100);
transactions.set('May-21', -359);
transactions.set('May-29', 2200);


// Add function to show balance status
function showBalanceStatus(amount){
    console.log(`Balance: ${amount}`);
    if (amount < 0) {
        console.log("YOU ARE OVERDRAWN");
    } else if (amount < 20){
        console.log("Warning: You are close to zero balance");
    } else {
        console.log("Thank you for your business");
    }
}

// Add function to show transactions
function showTransactions(balance){
    console.log(`Balance: ${balance}`);
    for (let transaction of transactions){
        console.log(transaction[0]);
        if (transaction[1] < 0) {
            console.log("Withdrawal");
        } else {
            console.log("Deposit");
        } 
            console.log(transaction[1]);
            console.log(balance += transaction[1]);
            if (balance < 0){
                balance -= 25; 
            }
        console.log(balance);
    }
 showBalanceStatus(balance);
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info
const customerInfo = {
    'accountName': accountHolder,
    'accountNumber': accountNumber,
    'businessName': businessName,
    'adresses': addresses,
    'phoneNumbers': phoneNumbers,
    'transactions': transactions,
    'startingBalance': startingBalance
}


// Function to add customer attributes
function addProperties(favMelon='Cantaloupe', favPet=0) {
    customerInfo.favMelon = favMelon;
    customerInfo.favPet = favPet;
}

// Add attributes for this user
addProperties('Casaba', 2);

// ///////////////////////////////////////////////////////
// Getting a Business Loan
function businessLoan(income, melonType, pets){
    if (income < 100000){
        if (melonType === 'Casaba' || pets > 5){
            return '5%';
        } else {
            return "8%";
        }
    }else if (income >= 100000 && income <= 200000){
        if (melonType === 'Casaba' || pets > 5){
            return '4%';
        } else {
            return "7%";
        }
    } else{
        return "4%";
    }

    }


// Function to return loan rate
function accountReport(customerData){
    accountInfo(customerData.accountName, customerData.accountNumber, customerData.businessName);
    showPhoneNums(customerData.phoneNumbers);
    showTransactions(customerData.startingBalance);
    if (customerData.favMelon === 'Casaba' || customerData.pets > 5){
        console.log(`Congratulations on being a premiere customer!`);
    }


}

// const customerInfo = {
//     'accountName': accountHolder,
//     'accountNumber': accountNumber,
//     'businessName': businessName,
//     'adresses': addresses,
//     'phoneNumbers': phoneNumbers,
//     'transactions': transactions,
//     'startingBalance': startingBalance



accountReport(customerInfo)



// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




