# bootcamp-tutoring-week-1-mini-assessment

1. Create a function called `getLastMedicationInfo` that takes in one parameter - `patient` - that represents an animal patient like the one featured in the data.js file. This function should use the principles of object and array access to the access the input patient's last medication and return a string of the name of the medication, the type of medication, and how frequently to administer.
```javascript
// example output
getLastMedicationInfo(patientA); // =>  "Laxatone - Gel - Administer Daily"
```

2. Create a function called `getObjectKeyValues` that takes in one parameter - `patients` - that represents an array of animal patients like the one featured in data.js. This function should iterate through every other object backwards using a for loop. At each iteration, the function should use a for in loop to access each key of the object. For every property that has a boolean value attached to it, the function shoud add a string to an output array like this: `'<key>: <value>'`. The function should return this array of strings at the end.
```javascript
// example output
getObjectKeyValues(patients); // => ['age: 12', 'neutered: true', 'age: 8', 'neutered: true']
```

3. Create a function called `getDailyMedications` that takes in one parameter - `patients` - that represents an array of animal patients like the one featured in data.js. This function should use a for loop to access each animal in the patients array. At each iteration, the function should use a nested for loop to access each animal's medications one at a time. Every medication that is taken daily should be added to an output array. The function should return this output array at the end.
```javascript
// example output
getDailyMedications(patients);
/*
RETURNS => 
[
    {
        name: 'Gabepentin',
        type: 'Liquid',
        administration: {
            frequency: 'Daily',
            amount: '0.5 miligrams',
            notes: 'Must be ingested orally.'
        },
    },
    {
        name: 'Laxatone',
        type: 'Gel',
        administration: {
            frequency: 'Daily',
            amount: 'Dab',
            notes: 'Mix with food'
        }
    },
    {
        name: 'Prednizone',
        type: 'Pill',
        administration: {
            frequency: 'Daily',
            amount: '1 pill',
            notes: null
        }
    }
]
*/
```