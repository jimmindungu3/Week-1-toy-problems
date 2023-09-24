let basicSalary = 50000
benefits = 15000


// Calculate gross salary
function grossSalaryCalculator(basicSalary, benefits) {
    let grossSalary;
    grossSalary = basicSalary + benefits;
    return grossSalary;
}
const grossSalary = grossSalaryCalculator();




// Calculate NHIF deduction as per given rates.
function nhifCalculator(grossSalary) {

    let nhifContribution;
switch (true) {
    case (grossSalary <= 5999):
        nhifContribution = 150;
        break;
    case (grossSalary >= 6000 && grossSalary <= 7999):
        nhifContribution = 300;
        break;
    case (grossSalary >= 8000 && grossSalary <= 11999):
        nhifContribution = 400;
        break;
    case (grossSalary >= 12000 && grossSalary <= 14999):
        nhifContribution = 500;
        break;
    case (grossSalary >= 15000 && grossSalary <= 19999):
        nhifContribution = 600;
        break;
    case (grossSalary >= 20000 && grossSalary <= 24999):
        nhifContribution = 750;
        break;
    case (grossSalary >= 25000 && grossSalary <= 29999):
        nhifContribution = 850;
        break;
    case (grossSalary >= 30000 && grossSalary <= 34999):
        nhifContribution = 900;
        break;
    case (grossSalary >= 40000 && grossSalary <= 44999):
        nhifContribution = 1000;
        break;
    case (grossSalary >= 45000 && grossSalary <= 49999):
        nhifContribution = 1100;
        break;
    case (grossSalary >= 50000 && grossSalary <= 59999):
        nhifContribution = 1200;
        break;
    case (grossSalary >= 60000 && grossSalary <= 69999):
        nhifContribution = 1300;
        break;
    case (grossSalary >= 70000 && grossSalary <= 79999):
        nhifContribution = 1400;
        break;
    case (grossSalary >= 80000 && grossSalary <= 89999):
        nhifContribution = 1500;
        break;
    case (grossSalary >= 90000 && grossSalary <= 99999):
        nhifContribution = 1600;
        break;
    default:
        nhifContribution = 1700;
    }
    return(nhifContribution);
}
const nhifContribution = nhifCalculator(grossSalary); 




//  calculate NSSF deduction. 6% of pensionable pay. NSSF deduction is capped at 6000 
function nssfCalculator(basicSalary) {

    let nssfContribution;
    if (basicSalary * 0.06 > 6000) {
        nssfContribution = 6000;
    } else {
        nssfContribution = 0.06 * basicSalary;
    }
    return(nssfContribution);
}
const nssfContribution = nssfCalculator(basicSalary);




// Calculate taxable income.
function calculateTaxableIncome(grossSalary, nhifContribution, nssfContribution) {
    let taxableIncome = grossSalary - (nhifContribution + nssfContribution);
    return taxableIncome;
}
const taxableIncome = calculateTaxableIncome(grossSalary, nhifContribution, nssfContribution);




// Calculate PAYE
function calculatePAYE(taxableIncome) {
   let personalRelief = 2400;
   let grossTax;
    if (taxableIncome <= 24000) {
        grossTax = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        grossTax = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        grossTax = 24000 * 0.1 + 8333 * 0.25 + (taxableIncome-32333) * 0.3;
    } else if (taxableIncome <= 800000) {
        grossTax = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + (taxableIncome - 500000) * 0.325;
    } else
        grossTax = 24000 * 0.1 + 8333 * 0.25 + 467667 * 0.3 + 467667 * 0.325 + (taxableIncome - 800000) * 0.35
    
    const PAYE = grossTax - personalRelief;
    return PAYE;
}
const PAYE = calculatePAYE(taxableIncome);




function calculateNetSalary(grossSalary, paye) {
    let netSalary;
    netSalary = grossSalary - paye;
    return netSalary;
}
const netSalary = calculateNetSalary(grossSalary, PAYE);







grossSalaryCalculator(basicSalary, benefits);
nhifCalculator(grossSalary);
nssfCalculator(basicSalary);
calculateTaxableIncome(grossSalary, nhifContribution, nssfContribution);
calculatePAYE(taxableIncome);
calculateNetSalary(grossSalary, PAYE);


console.log("BASIC SALARY: " + basicSalary);
console.log("GROSS SALARY: " + grossSalary);
console.log("NHIF CONTIBUTION: " + nhifContribution);
console.log("NSSF CONTRIBUTION: " + nssfContribution);
console.log("TAXABLE INCOME: "+ taxableIncome);
console.log("NET SALARY: " + netSalary);