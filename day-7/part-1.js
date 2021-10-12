const test = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

const testArr = test.split("\n");
const splitRules = testArr.map((rule) => {
  return rule.split("bags contain");
});

console.log(splitRules);

const countShinyGold = (ruleArr) => {
  let answer = 0;
  const colorArr = [];
  for (let rules of ruleArr) {
    let counter = 0;
    if (rules[1].includes("shiny gold")) {
      colorArr.push(rules[0].r.trim());
      counter++;
    }
    for (let color of colorArr) {
      if (rules[1].includes(color)) {
        counter++;
      }
      return counter;
    }
  }
};

console.log(countShinyGold(splitRules));
