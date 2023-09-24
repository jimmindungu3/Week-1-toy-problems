// Define basicSalary and benefits
const basicSalary = 250000;
const benefits = 50000;

// Calculate gross salary
function grossSalaryCalculator(basicSalary, benefits) {
    // let grossSalary;
    grossSalary = basicSalary + benefits;
    return grossSalary;
}
const grossSalary = grossSalaryCalculator(basicSalary, benefits);

// Calculate NHIF deduction as per given rates
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
    return nhifContribution;
}
const nhifContribution = nhifCalculator(grossSalary);

// Calculate NSSF deduction. 6% of pensionable pay. NSSF deduction is capped at 6000
function nssfCalculator(basicSalary) {
    let nssfContribution;
    if (basicSalary * 0.06 > 6000) {
        nssfContribution = 6000;
    } else {
        nssfContribution = 0.06 * basicSalary;
    }
    return nssfContribution;
}
const nssfContribution = nssfCalculator(basicSalary);

// Calculate taxable income
function calculateTaxableIncome(grossSalary, nhifContribution, nssfContribution) {
    let taxableIncome = grossSalary - (nhifContribution + nssfContribution);
    return taxableIncome;
}
const taxableIncome = calculateTaxableIncome(grossSalary, nhifContribution, nssfContribution);

// Calculate PAYE
function calculatePAYE(taxableIncome) {
    let personalRelief = 2400;
    let grossTax;
    // Your if-else conditions here...
    const PAYE = grossTax - personalRelief;
    return PAYE;
}
const PAYE = calculatePAYE(taxableIncome);

// Calculate net salary
function calculateNetSalary(grossSalary, paye) {
    let netSalary;
    netSalary = grossSalary - paye;
    console.log("Net salary: " + netSalary);
    return netSalary;
}
const netSalary = calculateNetSalary(grossSalary, PAYE);

// Debugging
console.log("Gross Salary: " + grossSalary);
console.log("NHIF Contribution: " + nhifContribution);
console.log("NSSF Contribution: " + nssfContribution);
console.log("Taxable Income: " + taxableIncome);
console.log("PAYE: " + PAYE);
