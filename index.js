// Function to calculate change based on user input
function calculateChange() {
	// Get Purchase Price input value
	const purchasePrice = parseFloat(document.getElementById("purchase-price").value);
	// Get Payment Price input value
	const paymentAmount = parseFloat(document.getElementById("payment-amount").value);
	// Get quantity for each currency unit
	const pennyQty = parseFloat(document.getElementById("penny-input").value) || 0;
	const nickelQty = parseFloat(document.getElementById("nickel-input").value) || 0;
	const dimeQty = parseFloat(document.getElementById("dime-input").value) || 0;
	const quarterQty = parseFloat(document.getElementById("quarter-input").value) || 0;
	const oneQty = parseFloat(document.getElementById("one-input").value) || 0;
	const fiveQty = parseFloat(document.getElementById("five-input").value) || 0;
	const tenQty = parseFloat(document.getElementById("ten-input").value) || 0;
	const twentyQty = parseFloat(document.getElementById("twenty-input").value) || 0;
	const oneHundredQty = parseFloat(document.getElementById("one-hundred-input").value) || 0;
	// Create the cash in drawer array
	const cashInDrawer = [
		["PENNY", pennyQty * 0.01],
		["NICKEL", nickelQty * 0.05],
		["DIME", dimeQty * 0.1],
		["QUARTER", quarterQty * 0.25],
		["ONE", oneQty * 1],
		["FIVE", fiveQty * 5],
		["TEN", tenQty * 10],
		["TWENTY", twentyQty * 20],
		["ONE HUNDRED", oneHundredQty * 100],
	];
	// Call existing checkCashRegister function with the input values
	const result = checkCashRegister(purchasePrice, paymentAmount, cashInDrawer);
	// Display the result
	const resultElement = document.getElementById("result");
	resultElement.textContent = `Status: ${result.status}, Change: ${JSON.stringify(result.change)}`;
}

// Define the currency values in cents
const currencyUnit = {
	PENNY: 1,
	NICKEL: 5,
	DIME: 10,
	QUARTER: 25,
	ONE: 100,
	FIVE: 500,
	TEN: 1000,
	TWENTY: 2000,
	"ONE HUNDRED": 10000,
};

// Function to convert dollars to cents
function dollarsToCents(dollars) {
	return Math.round(dollars * 100);
}

// Function to convert cents to dollars
function centsToDollars(cents) {
	return cents / 100;
}

// Main function to check cash register
function checkCashRegister(price, cash, cid) {
	// Convert price to cents
	const priceInCents = dollarsToCents(price);
	// Convert cash to cents
	const cashInCents = dollarsToCents(cash);
	// Calculate the change due in cents
	let changeDue = cashInCents - priceInCents;
	// Convert Cash in Drawer (CID) to cents
	let cidInCents = cid.map(([unit, amount]) => [unit, dollarsToCents(amount)]);
	// Calculate the total amount in the cash drawer
	let totalInDrawer = cidInCents.reduce((total, [, amount]) => total + amount, 0);
	// Check if there's insufficient funds
	if (totalInDrawer < changeDue) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}
	// Check if the drawer has exact change
	if (totalInDrawer === changeDue) {
		return { status: "CLOSED", change: cid };
	}
	// Calculate change and update the drawer
	// Initialize an empty array to store the change to be returned to the customer
	let change = [];
	// Iterate through each currency unit in the cash drawer starting from the highest value
	for (let i = cidInCents.length - 1; i >= 0; i--) {
		// Destructure the array to get the unit and the amount of that unit in the drawer
		const [unit, amountInDrawer] = cidInCents[i];
		// Get the value of the current currency unit in cents
		const unitValue = currencyUnit[unit];
		// Calculate how much change we can give using the current unit
		const changeWithUnit = Math.min(amountInDrawer, Math.floor(changeDue / unitValue) * unitValue);
		// Update change due and drawer
		changeDue -= changeWithUnit;
		cidInCents[i][1] -= changeWithUnit;
		// If we have change for the current unit, add it to the result
		if (changeWithUnit > 0) {
			change.push([unit, centsToDollars(changeWithUnit)]);
		}
	}
	// If there's still change due, return insufficient funds
	if (changeDue > 0) {
		return { status: "INSUFFICIENT_FUNDS", change: [] };
	}
	return { status: "OPEN", change };
}

// Test
const result = checkCashRegister(19.5, 20, [
	["PENNY", 1.01],
	["NICKEL", 2.05],
	["DIME", 3.1],
	["QUARTER", 4.25],
	["ONE", 90],
	["FIVE", 55],
	["TEN", 20],
	["TWENTY", 60],
	["ONE HUNDRED", 100],
]);

console.log(result);
// { status: 'OPEN', change: [ [ 'QUARTER', 0.5 ] ] }
