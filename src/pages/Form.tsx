import React, { useState } from "react";
import {
  Card,
} from "react-bootstrap";
import createForm, { FormDescription } from "../components/Form";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

const F: React.FC = () => {
  const [formData, setFormData] = useState<Record<string, any>>({});
  const myForm: FormDescription = [
    {
      name: "first_name",
      fd: { type: "Edit", data_type: "String" },
      value: "John",
    },
    {
      name: "last_name",
      fd: { type: "Edit", data_type: "String" },
      value: "Smith",
    },
    {
      name: "category",
      fd: { type: "Select", options: ["Work", "Personal"] },
      value: "Work",
    },
    { name: "birthdate", fd: { type: "Date" }, value: "1990-01-01" },
    {
      name: "meeting",
      fd: { type: "DateTime" },
      value: "2023-06-15T14:30",
    },
  ];
  const MyFormComponent = createForm(myForm);

  return (
    <div>
      <h1>Sample Generated Form</h1>
      <Card>
        <Card.Header>Sample Form</Card.Header>
        <Card.Body>
          <MyFormComponent onSubmit={setFormData} />
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Json Result</Card.Header>
        <Card.Body>
            <SyntaxHighlighter language="json" style={solarizedlight}>
            {JSON.stringify(formData, null, 2)}
          </SyntaxHighlighter>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>Form Description</Card.Header>
        <Card.Body>
            <SyntaxHighlighter language="json" style={solarizedlight}>
            {JSON.stringify(myForm, null, 2)}
          </SyntaxHighlighter>
        </Card.Body>
      </Card>
    </div>
  );
};

export default F;
