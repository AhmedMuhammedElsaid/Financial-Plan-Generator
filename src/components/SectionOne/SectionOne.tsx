import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { Container, Row, Col, FormGroup } from "reactstrap";
import RadioInput from "../RadioInput";

interface Props {
  changeHandler: (key: string, value: number | string) => void;
  values: any;
  questions: {
    question: string;
    options: string[];
    name: string;
  }[];
}
const SectionOne: FunctionComponent<Props> = ({
  changeHandler,
  values,
  questions,
}) => {
  const [currentQuestions, setCurrentQuestions] = useState(questions);
  useEffect(() => {
    switch (values["sec1-q1"]) {
      case "B2C":
        setCurrentQuestions(
          questions.filter((question) => question.name !== "sec1-q2")
        );
        break;
      case "B2B":
        setCurrentQuestions(
          questions.filter((question) => question.name !== "sec1-q3")
        );
        break;
      default:
        setCurrentQuestions(questions);
    }
  }, [values]);
  return (
    <Container>
      <Row>
        <Col>
          <FormGroup tag="fieldset" className="section-styles p-5 te">
            <legend className="text-center my-3 mb-3 fs-1 text-muted">
              Section 1
            </legend>
            {currentQuestions?.map(({ question, options, name }, index) => (
              <Fragment key={index}>
                <h3 className="text-muted text-capitalize">{question}</h3>
                <RadioInput
                  options={options}
                  name={name}
                  onChange={changeHandler}
                />
              </Fragment>
            ))}
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionOne;
