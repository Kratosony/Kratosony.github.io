const answers = {
  communication: {
    0: [
      "I would like to help him become the best he could be, however he was not interested in what I wanted to say.",
      "Communication Answer B",
      "Communication Answer C",
      "Communication Answer D",
    ],
    1: [
      "Communication2 is another solution that could work",
      "Communication2 is another solution that could work 2",
      "Communication2 is another solution that could work 3",
      "Communication2 is another solution that could work 4",
    ],
    2: [
      "Communication3, my name is Billy the Kid",
      "Communication3, my name is Chuck Norris",
      "Communication3, my name is John Wick",
      "Communication3, my name is Indiana Jones",
    ],
  },
  section2: {
    0: [
      "Solution A for section2",
      "Solution B for section2",
      "Solution C for section2",
      "Solution D for section2",
    ],
    1: [
      "Another solution that could work for section2",
      "Another solution that could work 2 for section2",
      "Another solution that could work 3 for section2",
      "Another solution that could work 4 for section2",
    ],
  },
  section3: {
    0: [
      "Solution A for section3",
      "Solution B for section3",
      "Solution C for section3",
      "Solution D for section3",
    ],
    1: [
      "Another solution that could work for section3",
      "Another solution that could work 2 for section3",
      "Another solution that could work 3 for section3",
      "Another solution that could work 4 for section3",
    ],
  },
  section4: {
    0: [
      "Solution A for section4",
      "Solution B for section4",
      "Solution C for section4",
      "Solution D for section4",
    ],
    1: [
      "Another solution that could work for section4",
      "Another solution that could work 2 for section4",
      "Another solution that could work 3 for section4",
      "Another solution that could work 4 for section4",
    ],
  },
};

const getAnswer = (section, index, userInput) => {
  const answerIndex = userInput % 4; // Modulo to ensure the index is always between 0-3
  return answers[section][index][answerIndex];
};

export default getAnswer;
