export interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

export const findNameOfTallestMountain = (mountains: Mountain[]): string => {
  let tallest = mountains.reduce((a, b) =>
    a.height > b.height ? a : b
  );
  return tallest.name;
};

const highestMountain: string = findNameOfTallestMountain(mountains);
console.log(highestMountain);
