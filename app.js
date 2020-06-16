const fs = require("fs");
const oa = require("@govtechsg/open-attestation");

document = fs.readFileSync("./docs/sample-dns-verified-special-characters.json", "utf8");
unwrappedDocument = oa.getData(document);
fs.writeFileSync("./docs/sample-dns-verified-special-characters-unwrapped.json", unwrappedDocument);

