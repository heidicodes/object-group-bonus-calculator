// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


function loopOverAll(array){
  for (let i=0; i < array.length; i++){
    calculateIndividualEmployeeBonus[i];
  }
  return calculateIndividualEmployeeBonus();
}
console.log(loopOverAll(employees));

// This function will calculate 1 employee's bonus!
// //
function calculateIndividualEmployeeBonus(employeeObject) {
// return newObject{
            name: employeeObject.name,
            bonusPercentage: ratingBonus + retentionBonus + salaryAdjustment
            totalCompensation: employeeObject.annualSalary + bonusPercentage
            totalBonus: 
          }  
//   // your logic here
//  // write loop that takes employee object and console logs for each employee
//   // log should be in the loop
//   // for (let employeeObject of employees) {
//     console.log(employeeObject.name);
//     return ratingBonus + retentionBonus + salaryAdjustment
//   }
 
function ratingBonus(employeeObject){
  if (employeeObject.reviewRating == 3) {
    return employeeObject.annualSalary * .04 
  }
  else if  (employeeObject.reviewRating == 4) {
   return employeeObject.annualSalary * .06
    }
  else if (employeeObject.reviewRating == 5) {
   return employeeObject.annualSalary * .1
    }
  else if (employeeObject.reviewRating <= 2) {
    return 0
    }

}  
ratingBonus(employees[0]);

// function retentionBonus(employeeObject){
//     if (employeeNumber.length == 4) {
//       return employeeObject.annualSalary + (employeeObject.annualSalary * 0.05)
//     }
//       else {
//         return 0
//       }
// }

// function salaryAdjustment(employeeObject){
//   if(employeeObject.annualSalary > 65,000){
//     return employeeObject.annualSalary - (employeeObject.annualSalary * 0.01)
//   }
//   else{
//     return 0
//   }
// }

// console.log(calculateIndividualEmployeeBonus(employees[0]));
 // return outputObject.name
//  outputObject.bonusPercentage
//  outputObject.totalCompensation
//  outputObject.totalBonus
  
  // return new object with bonus results


// employeeObject.name
// employeeObject.annualSalary // + bonusPercentage
// employeeObject.reviewRating