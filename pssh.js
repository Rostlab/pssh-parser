/*jshint esversion: 6 */

module.exports = {
    /* 2 Example entries of PSSH file:
    *
    *  000624d4028992d83dc242ee6a282059,c66505315f4966bc9381d721c462db26,1,1.5e-58,0.16,1-37:2-38 39-40:39-40 43-53:41-51 54-87:53-86 89-107:87-105 109-149:106-146 150-156:148-154 158-176:155-173
    *  000624d4028992d83dc242ee6a282059,ee981409431eefc30969429f1ab32709,1,1.1e-55,0.23,1-40:2-41 43-53:42-52 54-87:54-87 89-107:88-106 109-149:107-147 150-179:149-178
    *
    */
    parsePSSH2file : function(data){
        // Split the file into rows
        var rows = data.split(/\n/);
        return rows
        // Map every comma separated element in the row to attributes
            .map(function(element){
            var attributes = element.split(',');

            if(attributes.length == 6){

                // Eg: "1-40:2-41 43-53:42-52 54-87:54-87 89-107:88-106 109-149:107-147 150-179:149-178"
                var Alignment = attributes[5].replace(/\r?\n|\r/,"");

                // Eg: ["1-40:2-41", "43-53:42-52", "54-87:54-87", "89-107:88-106", "109-149:107-147", "150-179:149-178"]
                var pieces = Alignment.split(/\s/g);
                var Match_length = 0;

                pieces.forEach(function(piece){
                    [start, end] = piece.split(/\-/);
                    Match_length += (parseInt(end)-parseInt(start)+1);
                });

                return {
                    protein_sequence_hash: attributes[0],
                    PDB_chain_hash: attributes[1],
                    Repeat_domains: attributes[2],
                    E_value: attributes[3],
                    Identity_Score: attributes[4],
                    Match_length: Match_length,
                    Alignment: Alignment
                };
            }
        })
        // Filter to get rid of undefined:
        //    - Last row of file is usually empty.
        //    - If a row is nasty and has length != 6
            .filter(function(element){
            return element !== undefined;
        });
    }
};