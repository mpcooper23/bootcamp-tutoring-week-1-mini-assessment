/*
Only declare your variables with const and let.
*/

// Problem #1 //
let getLastMedicationInfo = (patient) => {
    const last = patient.medications[patient.medications.length - 1];
    return `${last.name} - ${last.type} - Administer ${last.administration.frequency}`;
};

// Problem #2 //
let getObjectKeyValues = (patients) => {
    const output = [];
    for (let i = patients.length - 1; i >= 0; i-=2){
        for (let key in patients[i]){
            if (typeof patients[i][key] === 'boolean'){
                output.push(`${key}: ${patients[i][key]}`);
            }
        }
    }
    return output;
};

// Problem #3 //
let getDailyMedications = (patients) => {
    const output = [];
    for (let i = 0; i < patients.length; i++){
        const meds = patients[i].medications;
        for (let j = 0; j < meds.length; j++){
            console.log(meds);
            if (meds[j].administration.frequency === 'Daily'){
                output.push(meds[j]);
            }
        }
    }
    return output;
};

// Problem #4 //
let getOneMedBySpecies = (patients, species) => {
    const output = [];
    for (let i = 0; i < patients.length; i++){
        if (patients[i].species === species){
            if (patients[i].medications.length === 1){
                output.push({
                    patient: `${patients[i].name} - ${patients[i].species}`,
                    medication: `${patients[i].medications[0].name}`,
                });
            }
        }
    }
    return output;
};

