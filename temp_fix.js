const fs = require("fs");
const path = "init/data.js";
let s = fs.readFileSync(path, "utf8");
s = s.replace(/image:\s*\{\s*filename:\s*["']listingimage["']\s*,\s*url:\s*["']([^"']+)["']\s*\}/g, 'image: ""');
fs.writeFileSync(path, s);
