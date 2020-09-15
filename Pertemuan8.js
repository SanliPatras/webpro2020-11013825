const account = {
	name: "Menu Makanan",
	expenses: 20000,
	detal: {
		namaMenu: "Ayam Lalapan",
		takaran: "1 Piring",
		harga: 20000,
	},
	addExpenses: [20000],
	expenses: function () {
		let total = 0;
		this.addExpenses.forEach(function (el) {
			total = total + el;
		})
		this.expenses = total / 1;
	}
//	let mhs = [ ];
//account [0] = "Ayam Lalapan";
//account [1] = "20000";
//account.push("Nutrisari");
//account.push(5000);
//console.log(account.join (" - "));
};
console.log(account);

const getAccountSummary = function (a, b) {
	return a + b;
};
const addExpenses = {
	menuMakanan: "Ayam Lalapan",
	menuMinuman: "Nutrisati",
	harga: "Total Harga"
}
console.log(addExpenses);
console.log(getAccountSummary (20000, 5000));
