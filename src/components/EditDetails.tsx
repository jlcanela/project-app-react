import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export type FieldConfig<T> = {
  label: string;
  key: keyof T;
  render?: (value: any) => React.ReactNode;
  editable?: boolean;
  type?: string;
};

type EditDetailsProps<T> = {
  data: T;
  fields: FieldConfig<T>[];
  title: string;
  onSave: (updatedData: T) => void;
  onCancel: () => void;
};

export function EditDetails<T>({ data, fields, title, onSave, onCancel }: EditDetailsProps<T>) {
  const [editedData, setEditedData] = useState<T>(data);

  useEffect(() => {
    setEditedData(data);
  }, [data]);

  if (!data) {
    return <span>Data not loaded</span>;
  }

  const handleInputChange = (key: keyof T, value: any) => {
    setEditedData({ ...editedData, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData = fields.reduce((acc, field) => {
      if (field.editable) {
        acc[field.key] = editedData[field.key];
      } else {
        acc[field.key] = data[field.key];
      }
      return acc;
    }, {} as T);
    onSave(updatedData);
  };

  return (
    <>
      <h1>{title}</h1>
      <Form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Form.Group key={field.key as string} className="mb-3">
            <Form.Label><strong>{field.label}:</strong></Form.Label>
            {field.editable ? (
              <Form.Control
                type={field.type || "text"}
                value={String(editedData[field.key])}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
              />
            ) : (
              <Form.Control
                plaintext
                readOnly
                value={field.render 
                  ? String(field.render(data[field.key])) 
                  : String(data[field.key])}
              />
            )}
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Save
        </Button>
        <Button variant="secondary" className="ms-2" onClick={onCancel}>
          Cancel
        </Button>
      </Form>
    </>
  );
}
