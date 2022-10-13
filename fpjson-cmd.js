import { fpjson } from "./fpjson.js";

if (Deno.args.length == 0) {
  const stdin = new TextDecoder().decode(await Deno.readAll(Deno.stdin));
  console.log(fpjson(JSON.parse(stdin)));
} else {
  const s = JSON.parse(await Deno.readTextFile(Deno.args[0]));
  for (let i = 1; i < Deno.args.length; i++) {
    s.push(Deno.args[i]);
  }
  console.log(fpjson(s));
}
