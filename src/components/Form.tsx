import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

type DataType = 'String' | 'Int';

type FieldDescription = 
  | { type: 'Edit'; data_type: DataType }
  | { type: 'Select'; options: string[] }
  | { type: 'Date' }
  | { type: 'DateTime' };

type Field<T> = {
  name: string;
  fd: FieldDescription;
  value: T;
};

export type FormDescription = Field<any>[];

interface CreateFormProps {
  onSubmit: (formData: Record<string, any>) => void;
}

const createForm = (formFields: FormDescription) => {
  const FormComponent: React.FC<CreateFormProps> = ({ onSubmit }) => {
    const [formData, setFormData] = useState<Record<string, any>>(() => {
      const initialData: Record<string, any> = {};
      formFields.forEach(field => {
        initialData[field.name] = field.value;
      });
      return initialData;
    });

    const handleChange = (name: string, value: any) => {
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSubmit(formData);
    };

    const renderField = (field: Field<any>) => {
      switch (field.fd.type) {
        case 'Edit':
          return (
            <Form.Control
              type={field.fd.data_type === 'Int' ? 'number' : 'text'}
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          );
        case 'Select':
          return (
            <Form.Select
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            >
              {field.fd.options.map(option => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Form.Select>
          );
        case 'Date':
          return (
            <Form.Control
              type="date"
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          );
        case 'DateTime':
          return (
            <Form.Control
              type="datetime-local"
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
            />
          );
        default:
          return null;
      }
    };

    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Row>
            {formFields.map(field => (
              <Col md={6} key={field.name}>
                <Form.Group className="mb-3">
                  <Form.Label>{field.name}</Form.Label>
                  {renderField(field)}
                </Form.Group>
              </Col>
            ))}
          </Row>
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
    );
  };

  return FormComponent;
};

export default createForm;
