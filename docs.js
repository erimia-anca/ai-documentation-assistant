const fs = require("fs");
const path = require("path");
//reads the documentation from the folder
function loadDoc(){
    const docsFolder = path.join(__dirname, "docs");
    const files = fs.readdirSync(docsFolder);
    let documentation = "";
    for(const file of files){ //this loop reads each file one at a time
        const filePath = path.join(docsFolder, file);
        const content = fs.readFileSync(filePath, "utf8");
        documentation += content + "\n";
    }
    return documentation;
}

module.exports = {
    loadDoc
};