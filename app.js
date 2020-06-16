const fs = require("fs");
const oa = require("@govtechsg/open-attestation");

document = fs.readFileSync("./docs/sample-dns-verified-special-characters-unwrapped.json", "utf8");
wrappedDocument = oa.wrapDocument(document);
fs.writeFileSync("./docs/sample-dns-verified-special-characters-unwrapped2.json", wrappedDocument);

