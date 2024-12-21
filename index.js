/*
Only declare your variables with const and let.
*/

// Problem #1 //

/**
 * Create a function called getLastMedicationInfo that takes in one parameter - patient - 
 * that represents an animal patient like the one featured in the data.js file. 
 * This function should use the principles of object and array access to the access 
 * the input patient's last medication and return a string of the name of the medication, 
 * the type of medication, and how frequently to administer.
// example output
getLastMedicationInfo(patientA); // =>  "Laxatone - Gel - Administer Daily"


I: patient (object data)
O:  return formatted string that accesses medication info
C: template literal syntax; object & array access
E:
 */

let getLastMedicationInfo = (patient) => {
let last = patient.medications[patient.medications.length - 1];
return `${last.name} - ${last.type} - Administer ${last.administration.frequency}`
}


// Problem #2 //
/**
 * Create a function called getObjectKeyValues that takes in one parameter - patients - 
 * that represents an array of animal patients like the one featured in data.js. 
 * This function should iterate through every other object backwards using a for loop. At each iteration, 
 * the function should use a for in loop to access each key of the object. For every property that has a 
 * boolean value attached to it, the function shoud add a string to an output array like this: 
 * 
 * '<key>: <value>'. 
 * The function should return this array of strings at the end.
 * 
// example output
getObjectKeyValues(patients); // => ['age: 12', 'neutered: true', 'age: 8', 'neutered: true']


I: patients (object data)
O:  array of boolean keys in a string formatted as such: '<key>: <value>'. 
C: iterate through every other object using reverse for loop; for-in loop to access object keys; 
conditional to determine if key is a boolean
E:
 */

let getObjectKeyValues = (patients) => {
    let output = []; //output array
    for(let i = patients.length - 1; i >= 0; i -= 2){
for (let key in patients[i]){
    if(typeof patients[i][key] === 'boolean'){
output.push(`${key} ${patients[i][key]}`)//push key, key/value pairs
}
    }
}
    return output //return array
}

// Problem #3 //
/**
 * Create a function called getDailyMedications that takes in one parameter - patients - 
 * that represents an array of animal patients like the one featured in data.js. 
 * This function should use a for loop to access each animal in the patients array. 
 * At each iteration, the function should use a nested for loop to access each animal's 
 * medications one at a time. Every medication that is taken daily should be added to an output array. 
 * The function should return this output array at the end.
 * 
I: patients (object data)
O:  output array of daily meds
C: for loop, nested for loop
E:
 */

let getDailyMedications = (patients) => {
    let output = [];
    for(let i = 0; i < patients.length; i++){
        let animalMeds = patients[i].medications
        for(let j = 0; j <= animalMeds.length; j++){
            if(animalMeds[j].administration.frequency === 'Daily'){
                output.push(animalMeds[j])
            }
        }
    }
    return output;
}

// Problem #4 //
/**
 Create a function called getOneMedBySpecies that takes in two parameters - patients & species. 
 patients represents an array of animal patient objects like the one featured in the data.js file; 
 species represents a string of an animal's species. This function should use a for loop to iterate 
 through the input array and find each animal that matches the input species. For all of the animals 
 that match the species, the function should then determine if the matching animal only takes one 
 medication. For those animals, the function should create objects like that look like this:
{
    patient: <patient name> - <patient species>,
    medication: <medication name>
}
The function should push these objects into an output array that is returned at the end.


I: patients "ARRAY of Objects", species (string data)
O:  array of objects that include patient and med
C: for loop
E:
 */

let getOneMedBySpecies = (patients, species) => {
    let output = [];
    for(let i = 0; i <= patients.length; i++){
if (patients[i].species === species){
        if(patients[i].medications.length === 1){
let newObj = {
    patient: patients[i].name + patients[i].species,
    medication: patients[i].medications[j].name
} 
        }  
    output.push(newObj)
    }
}
    
    return output;
}

