describe("Bootcamp Week 1 Mini-assessment", function(){
    describe("getLastMedicationInfo", function(){
        const func = getLastMedicationInfo;
        it('should be written as an arrow function', function(){
            const func = getLastMedicationInfo.toString();
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = func.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            } else {
                expect(match).to.not.equal(null);
            }
        });
        it('should use template literal syntax', function(){
            const f = func.toString();
            const regex = /`(?=[$])\${([a-zA-Z]+.[a-zA-Z]+|[a-zA-Z]+)}\s\-\s\${([a-zA-Z]+.[a-zA-Z]+|[a-zA-Z]+)}\s-\sAdminister\s\${([a-zA-Z]+.[a-zA-Z]+.[a-zA-Z]+|[a-zA-Z]+)}`/g
            const match = f.match(regex);
            if (!match){
                expect(match).to.not.equal(null);
            } else {
                assert.equal(match.length > 0, true);
            }
        });
        it('should return a string', function(){
            assert.equal(typeof func(patientA), 'string');
        });
        it('should return a correctly formatted string', function(){
            assert.equal(func(patientA), "Laxatone - Gel - Administer Daily");
        })
    });
    
    describe("getObjectKeyValues", function(){
        const func = getObjectKeyValues;
        it('should be written as an arrow function', function(){
            const f = func.toString();
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = f.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            } else {
                expect(match).to.not.equal(null);
            }
        });
        it('should iterate backwards using a for loop', function(){
            const f = func.toString();
            const regex = /for(\s\(|\()(let|\slet)\s[a-zA-Z]+\s=(\s[a-zA-Z]+.length\s-\s1|\s[a-zA-Z]+);\s[a-zA-Z]+\s(>\s-1|>=\s0);\s([a-zA-Z]+-=2|[a-zA-Z]+\s-=\s2)\)/g;
            const match = f.match(regex);
            if (!match){
                expect(match).to.not.equal(null);
            } else {
                assert.equal(match.length > 0, true);
            }
        });
        it('should use a for in loop', function(){
            const f = func.toString();
            const regex = /for(\s\(|\()let\s[a-zA-Z]+\sin\s([a-zA-Z]+|[a-zA-Z]+\[[a-zA-Z]\])\)/g;
            const match = f.match(regex);
            if (!match){
                expect(match).to.not.equal(null);
            } else {
                assert.equal(match.length > 0, true);
            }
        });
        it('should return an array with correctly formatted strings', function(){
            const result = func(patients);
            const correct = ['neutered: true', 'vaccinationsUpToDate: true', 'neutered: true', 'vaccinationsUpToDate: false'];
            assert.deepEqual(result, correct);
        });
    });

    describe("getDailyMedications", function(){
        const func = getDailyMedications;
        it('should be written as an arrow function', function(){
            const func = getDailyMedications.toString();
            const regex = /\([a-zA-Z]+\)\s=>\s{/g;
            const match = func.match(regex);
            if (match){
                assert.equal(match.length > 0, true);
            } else {
                expect(match).to.not.equal(null);
            }
        });
        it('should have nested for loops', function(){
            const f = func.toString();
            const regex1 = /for(\s\(|\()(let|\slet)\s[a-zA-Z]+\s=\s0;\s[a-zA-Z]+\s(<\s[a-zA-Z]+.length|\<=\s[a-zA-Z]+.length\s-\s1);\si\+\+\)({|\s{)/g;
            const regex2 = /for(\s\(|\()([a-zA-Z]+|\s[a-zA-Z]+)\s[a-zA-Z]+\s=\s0;\s[a-zA-Z]+\s(<\s[a-zA-Z]+\[[a-zA-Z]+\].[a-zA-Z]+.length|<=\s[a-zA-Z]+\[[a-zA-Z]+\].[a-zA-Z]+.length\s-\s1);\s[a-zA-Z]+\+\+\)({|\s{)/g;
            const regex3 = /for(\s\(|\()(let|\slet)\s[a-zA-Z]+\s=\s0;\s[a-zA-Z]+\s(<=\s[a-zA-Z]+.length\s-\s1|<\s[a-zA-Z]+.length);\s[a-zA-Z]+\+\+(\)|\s\))({|\s{)/g;
            const match1 = f.match(regex1);
            const match2 = f.match(regex2);
            const match3 = f.match(regex3);
            let matches = [];
            if (match1 !== null){
                matches = matches.concat(match1);
            }
            if (match2 !== null){
                matches = matches.concat(match2);
            }
            if (match3 !== null){
                matches = matches.concat(match3);
            }

            if (matches.length >= 2){
                assert.equal(matches.length >= 2, true);
            } else if (matches.length < 2){
                expect(matches.length < 2).to.be.true;
            }
        });
        it('should return an array of daily medication objects', function(){
            const result = func(patients);
            const correct = [
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
            ];
            assert.deepEqual(result, correct);
        });
    });
});