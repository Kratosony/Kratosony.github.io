import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { questions } from "./helpers/questions";
import { answers } from "./helpers/answers";
import Totals from "./Totals";
import ActionPoints from "./ActionPoints";
import QuestionsMarkedAs3 from "./QuestionsMarkedAs3";

const QuestionTable = ({ preferredPronoun }) => {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState(null);
  const [sectionTotals, setSectionTotals] = useState(null);
  const [selectedQuestions, setSelectedQuestions] = useState(null);
  const [questionsMarkedAs3, setQuestionsMarkedAs3] = useState(null);
  const initialValues = Object.keys(questions).reduce((acc, category) => {
    const categoryQuestions = Object.keys(questions[category]);
    const categoryValues = categoryQuestions.reduce((catAcc, questionId) => {
      return { ...catAcc, [questionId]: 0 };
    }, {});
    return { ...acc, [category]: categoryValues };
  }, {});

  const validationSchema = Yup.object().shape({
    ...Object.keys(questions).reduce((acc, category) => {
      const categoryQuestions = Object.keys(questions[category]);
      const categoryValidation = categoryQuestions.reduce(
        (catAcc, questionId) => {
          const question = questions[category][questionId];
          return {
            ...catAcc,
            [questionId]: Yup.number()
              .oneOf([0, 1, 2, 3])
              .required()
              .label(question),
          };
        },
        {}
      );
      return { ...acc, [category]: Yup.object().shape(categoryValidation) };
    }, {}),
  });

  const calculateTotals = (formData) => {
    const sectionTotals = {};
    Object.keys(formData).forEach((category) => {
      const categoryQuestions = formData[category];
      let categoryTotal = 0;
      Object.values(categoryQuestions).forEach((value) => {
        categoryTotal += value;
      });
      sectionTotals[category] = categoryTotal;
    });
    setSectionTotals(sectionTotals);
  };

  const getQuestionsMarkedAs1Or2 = (formData) => {
    const questionsMarkedAs1Or2 = [];
    const actionPoints = [];
    Object.keys(formData).forEach((category) => {
      Object.keys(formData[category]).forEach((questionId) => {
        const answer = formData[category][questionId];
        if (answer === 1 || answer === 2) {
          questionsMarkedAs1Or2.push(questions[category][questionId]);
          actionPoints.push(answers[category][questionId]);
        }
      });
    });
    return { questionsMarkedAs1Or2, actionPoints };
  };

  const getQuestionsMarkedAs3 = (formData) => {
    const questionsMarkedAs3 = [];
    Object.keys(formData).forEach((category) => {
      Object.keys(formData[category]).forEach((questionId) => {
        const answer = formData[category][questionId];
        if (answer === 3) {
          questionsMarkedAs3.push(questions[category][questionId]);
        }
      });
    });
    return questionsMarkedAs3;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setValues(values);
      calculateTotals(values);
      setSelectedQuestions(getQuestionsMarkedAs1Or2(values));
      setQuestionsMarkedAs3(getQuestionsMarkedAs3(values));
      setSubmitted(true);
      setSubmitting(false);
    }, 400);
  };

  if (!submitted) {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <table className="table is-bordered is-hoverable">
              <thead>
                <tr>
                  <th>Question Number</th>
                  <th>Question</th>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(questions).map((category) => (
                  <React.Fragment key={category}>
                    <tr className="is-selected">
                      <th colSpan="3">{category}</th>
                    </tr>
                    {Object.keys(questions[category]).map((questionId) => (
                      <tr key={questionId}>
                        <td>{questionId}</td>
                        <td>{questions[category][questionId]}</td>
                        <td>
                          <Field
                            className="input"
                            type="number"
                            name={`${category}.${questionId}`}
                          />
                          <ErrorMessage
                            className="help is-danger"
                            name={`${category}.${questionId}`}
                            component="p"
                          />
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
            <button
              className="button is-primary"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    );
  }

  return (
    <>
      <ActionPoints
        preferredPronoun={preferredPronoun}
        selectedQuestions={selectedQuestions}
      />
      <QuestionsMarkedAs3
        preferredPronoun={preferredPronoun}
        questionsMarkedAs3={questionsMarkedAs3}
      />
      <Totals sectionTotals={sectionTotals} />;
    </>
  );
};

export default QuestionTable;
