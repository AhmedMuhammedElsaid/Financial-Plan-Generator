import React, { Fragment, FunctionComponent, useEffect, useState } from "react";
import { Container, Row, Col, FormGroup } from "reactstrap";
import RadioInput from "../RadioInput";
interface Props {
  changeHandler: (key: string, value: number | string) => void;
  values: any;
  questions: (
    | {
        question: string;
        options: string[];
        name: string;
      }
    | {
        question: string;
        name: string;
        options?: undefined;
      }
  )[];
}
const SectionTwo: FunctionComponent<Props> = ({
  questions,
  changeHandler,
  values,
}) => {
  const [isDisable, setIsDisabled] = useState(false);
  useEffect(() => {
    switch (values["sec2-q1"]) {
      case "no":
        setIsDisabled(true);
        break;
      case "yes":
        setIsDisabled(false);
        break;
      default:
        return;
    }
  }, [values]);
  return (
    <Container>
      <Row>
        <Col>
          <FormGroup tag="fieldset" className="section-styles p-5 te">
            <legend className="text-center my-3 mb-3 fs-1 text-muted">Section 2</legend>
            {questions?.map((question, index) => (
              <Fragment key={index}>
                <h3 className="text-muted text-capitalize">
                  {question.question}
                </h3>
                {question?.options ? (
                  <RadioInput
                    options={question.options}
                    name={question.name}
                    onChange={changeHandler}
                  />
                ) : (
                  <input
                    name={question.name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      changeHandler(question.name, event.target.value)
                    }
                    value={isDisable ? "" : values["sec2-q2"]}
                    disabled={isDisable}
                    placeholder={
                      isDisable
                        ? "input is disabled..."
                        : "write amount here..."
                    }
                    type="number"
                    className={isDisable ? "disabled-input" : ""}
                    min="0"
                  />
                )}
              </Fragment>
            ))}
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionTwo;
