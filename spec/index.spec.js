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
            const regex = /`(?=[$])[$]{([a-zA-Z]+.[a-zA-Z]+|[a-zA-Z]+)}\s-\s\${([a-zA-Z]+.[a-zA-Z]+|[a-zA-Z]+)}\s-\s([a-zA-Z]+.[a-zA-Z]+|[a-zA-Z]+)\s\${([a-zA-Z]+.[a-zA-Z]+|[a-zA-Z]+)}`/g
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
});