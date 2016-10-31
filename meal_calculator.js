var Diner = function(dinerInfo){
	this.name = dinerInfo[0];
	this.listOfDishes = dinerInfo[1];
}

Diner.prototype.totalAmount = function(){
	var amount = 0;
	for(key in this.listOfDishes){
		amount += this.listOfDishes[key];
	}
	return amount;
}

Diner.prototype.totalTax = function(){
	var tax = 0.07 * this.totalAmount();
	return tax;
}

Diner.prototype.totalTip = function(){
	var tip = 0.05 * this.totalAmount();
	return tip; 
}

var Bill = function(diners){
	this.listOfDiners = diners;
}

Bill.prototype.totalPayment = function(){
	var totalPayment = 0;
	for(i=0; i<this.listOfDiners.length; i++){
		totalPayment += this.listOfDiners[i].totalAmount();
		totalPayment += this.listOfDiners[i].totalTax();
	}
	return totalPayment;
}

Bill.prototype.totalTip = function(){
	var totalTip = 0;
	for(i=0; i<this.listOfDiners.length; i++){
		totalTip += this.listOfDiners[i].totalTip();
	}
	return totalTip;
}

Bill.prototype.printInfo = function(){
	for(i=0; i<this.listOfDiners.length; i++){
		console.log(this.listOfDiners[i]);
		console.log(this.listOfDiners[i].totalAmount());
		console.log(this.listOfDiners[i].totalTax());
		console.log(this.listOfDiners[i].totalTip());
	}
}

var Mark = new Diner(['Mark', {'Sphagetti ala Carbonara': 12, 'Big Burger': 20}]);							
var Marie = new Diner(['Marie', {'Alaskan King Crab': 40, 'Turkish Kebab': 16}]);		 
var Martin = new Diner(['Martin', {'Hainanese Chicken Rice': 10,'Nasi Briyani': 14}]);

var theDiners = [Mark, Marie, Martin];

var theBill = new Bill(theDiners);

console.log(theBill.totalPayment());
console.log(theBill.totalTip());
theBill.printInfo();
	