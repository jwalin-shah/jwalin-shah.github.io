import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const failures = [];

for (const banned of ["text/babel", "@babel/standalone", "unpkg.com/react", "unpkg.com/react-dom"]) {
  if (index.includes(banned)) failures.push(`index.html still references ${banned}`);
}

const localRefs = [...index.matchAll(/\b(?:href|src)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((ref) => !/^(https?:|mailto:|#)/.test(ref));

for (const ref of localRefs) {
  const filePath = path.join(root, ref);
  if (!fs.existsSync(filePath)) failures.push(`missing local asset: ${ref}`);
}

for (const required of ["dist/site.js", "dist/site.js.map"]) {
  if (!fs.existsSync(path.join(root, required))) failures.push(`missing build output: ${required}`);
}

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("smoke ok: built bundle exists, local index assets resolve, browser Babel removed");
