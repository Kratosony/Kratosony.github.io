export default function convertPronouns(text, preferredPronoun) {
  const pronounMap = {
    he: {
      subjective: "he",
      objective: "him",
      possessiveAdjective: "his",
      reflexive: "himself",
    },
    she: {
      subjective: "she",
      objective: "her",
      possessiveAdjective: "her",
      reflexive: "herself",
    },
  };

  const pronouns = pronounMap[preferredPronoun];

  return text
    .replace(/\bhe\b/gi, pronouns["subjective"])
    .replace(/\bhim\b/gi, pronouns["objective"])
    .replace(/\bhis\b/gi, pronouns["possessiveAdjective"])
    .replace(/\bhimself\b/gi, pronouns["reflexive"]);
}
