# pssh-parser
A simple JS pssh parser
***

## How to use
Require this package via npm, then:

```javascript
const psshParser = require('pssh-parser');
```

After that you can use the following functions:

### Parse PSSH text file entry.
```javascript
const fs = require('fs');

fs.readFile(psshFile.path, 'utf8', function (error, data) {
  var entries = psshParser.parsePSSH2file(data);
}
```

The `entries` variable will be an array of the form:
```javascript
[
 {
    protein_sequence_hash: "abcdef123",
    PDB_chain_hash: "abcdef123",
    Repeat_domains: "1",
    E_value: "1E2",
    Identity_Score: "0.2",
    Match_length: "123",
    Alignment: "1:30"
  }, ...
]
```