const questions = {
    communication: {
        0: "Looks at other people's faces when they are talking to him or herself.",
        1: "This is a second question",
        2: "This is a third question",
    },
    section2: {
        0: "This is a question",
        1: "This is a second question",
    },
    section3: {
        0: "This is a question",
        1: "This is a second question",
    },
    section4: {
        0: "This is a question",
        1: "This is a second question",
    },
};

const retrieveQuestions = (type, index) => {
    if (questions[type] && questions[type][index]) {
        return questions[type][index];
    }
    return null;
};

export default retrieveQuestions;

