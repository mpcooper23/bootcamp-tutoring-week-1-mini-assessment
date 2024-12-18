// access a complex object
let getLastMedicationInfo = (patient) => {
    const medication = patient.medications[patient.medications.length - 1];
    const admin = medication.administration;
    return `${medication.name} - ${medication.type} - Administer ${admin.frequency}`
};

// iterate through an array of complex objects using a weird path
let getNonStringValues = (patients) => {
    const output = [];
    for (let i = patients.length - 1; i >= 0; i-=2){
        const pet = patients[i];
        for (let key in pet){
            if (typeof pet[key] !== 'string' && typeof pet[key] !== 'object'){
                const string = `${key}: ${pet[key]}`;
                output.push(string);
            }
        }
    }
    return output;
}

console.log(getNonStringValues(patients));
// 