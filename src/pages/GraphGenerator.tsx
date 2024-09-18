import React, { useState } from "react";
import {
  Card,
} from "react-bootstrap";
import createForm, { FormDescription } from "../components/Form";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : true;
  };
  
  function generateTrueObject<T extends object>(): DeepPartial<T> {
    const result: DeepPartial<T> = {};
  
    function recurse(obj: any, current: any) {
      for (const key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          current[key] = {};
          recurse(obj[key], current[key]);
        } else {
          current[key] = true;
        }
      }
    }
  
    recurse({} as T, result);
    return result;
  }
  
  interface ProjectDetailProps {
    id: string;
    name: string;
    description: string;
    project_status: {
      description: string;
    };
    status: string;
    owner_party: {
      party_id: number;
      name: string;
    };
}

  // Usage
const trueObject = generateTrueObject<ProjectDetailProps>();

const G: React.FC = () => {
  return (
    <div>
      <h1>Graph Generator</h1>
      <Card>
        <Card.Header>Json Result</Card.Header>
        <Card.Body>
            <SyntaxHighlighter language="json" style={solarizedlight}>
                Yep
            {JSON.stringify(trueObject, null, 2)}
          </SyntaxHighlighter>
        </Card.Body>
      </Card>
    </div>
  );
};

export default G;
