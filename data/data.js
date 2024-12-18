const patientA = {
    name: 'Noodles',
    species: 'Cat',
    age: 7,
    gender: 'male',
    neutered: true,
    medications: [
        {
            name: 'Gabepentin',
            type: 'Liquid',
            administration: {
                frequency: 'Daily',
                amount: '0.05 miligrams',
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
        }
    ]
};

const patients = [
    {
        name: 'Noodles',
        species: 'Cat',
        age: 7,
        gender: 'Male',
        neutered: true,
        medications: [
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
            }
        ]
    },
    {
        name: 'Bernie',
        species: 'Dog',
        age: 8,
        gender: 'Male',
        neutered: true,
        medications: [
            {
                name: 'Carprofen',
                type: 'Pill',
                administration: {
                    frequency: 'Daily',
                    amount: '1 pill',
                    notes: 'Suspend after 3 weeks'
                }
            }
        ]
    },
    {
        name: 'Bart',
        species: 'Dog',
        age: 4,
        gender: 'Male',
        neutered: true,
        medications: [
            {
                name: 'K9 Advantix',
                type: 'Liquid',
                administration: {
                    frequency: 'Monthly',
                    amount: '1 tube',
                    notes: null
                }
            }
        ]
    },
    {
        name: 'Fleur',
        species: 'Cat',
        age: 12,
        gender: 'Female',
        neutered: true,
        medications: [
            {
                name: 'Gabepentin',
                type: 'Liquid',
                administratin: {
                    frequency: 'As needed',
                    amount: '0.75 miligrants',
                    notes: 'Must be ingested orally'
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
    }
]