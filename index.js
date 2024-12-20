/*
Only declare your variables with const and let.
*/

let getLastMedicationInfo = (patient) => {
    const last = patient.medications[patient.medications.length - 1];
    return `${last.name} - ${last.type} - Administer ${last.administration.frequency}`;
}

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
}

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
}
