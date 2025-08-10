// domain.test.mjs
import test from "node:test";
import { multioplesOf3Or5 } from "../fonction/multioplesOf3Or5.js";
import assert from "assert";

const cases = [
  { name: "10 => 23", input: 10, expected: 23 },
  { name: "10 => 23", input²: 10, expected: 23 },
  { name: "1 => 0", input: 1, expected: 0 },
  { name: "15 => 45", input: 15, expected: 45 },
  { name: "-5 => 0 (négatif)", input: -5, expected: 0 },
];


test("fonction multiplesOf3Or5 renvoie le bon résultat", () => {
  for (let { name, input, expected } of cases) {
    assert.strictEqual(
      multiplesOf3Or5(input),
      expected,
      `échec sur le cas ${name}`
    );
  }
});
