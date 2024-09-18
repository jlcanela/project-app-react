import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";

export type FieldConfig<T> = {
  key: keyof T;
  label: string;
  editable: boolean;
  inputType: 'text' | 'select' | 'multiselect';
  options?: Array<{ value: string | number; label: string }>;
  update_multiselect_value?: (field: FieldConfig<T>, previous: T[keyof T], value: [string] | [number]) => T[keyof T];
  is_checked?: (option: any, value: any[]) => boolean;
  uncheck?: (currentValues: any[], option: any) => any[];
  check?:  (currentValues: any[], options: any[] | undefined, option: any) => any[];
};

type EditDetailsProps<T> = {
  data: T;
  fields: FieldConfig<T>[];
  title: string;
  onSave: (updatedData: T) => void;
  onCancel: () => void;
};

export function EditDetails<T extends Record<string, any>>({ data, fields, title, onSave, onCancel }: EditDetailsProps<T>) {
  const [editedData, setEditedData] = useState<T>(data);

  useEffect(() => {
    setEditedData(data);
  }, [data]);

  if (!data) {
    return <span>Data not loaded</span>;
  }

  const handleInputChange = (key: keyof T, value: T[keyof T]) => {
    setEditedData({ ...editedData, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedData);
  };

  const renderField = (field: FieldConfig<T>) => {
    if (!field.editable) {
      return (
        <Form.Control
          plaintext
          readOnly
          value={String(editedData[field.key])}
        />
      );
    }

    switch (field.inputType) {
      case 'select':
        return (
          <Form.Select
            value={String(editedData[field.key])}
            onChange={(e) => handleInputChange(field.key, e.target.value as T[keyof T])}
          >
            <option value="" disabled>Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Form.Select>
        );
      case 'multiselect':
        return (
          <div>
            {field.options?.map((option) => (            
              <Form.Check
                key={option.value}
                type="checkbox"
                id={`${String(field.key)}-${option.value}`}
                checked={field.is_checked ? field.is_checked(option.value, editedData[field.key]) : false } 
                label={option.label}
                onChange={(e) => {
                  const currentValues = Array.isArray(editedData[field.key]) ? editedData[field.key] as any[] : [];
                  let newValues: any[];
                  if (e.target.checked) {
                    newValues = field.check ? field.check(currentValues, field.options, option): currentValues;
                  } else {
                    newValues = field.uncheck ? field.uncheck(currentValues, option): currentValues;
                  }
                  handleInputChange(field.key, newValues as T[keyof T]);
                }}
              />
            ))}
          </div>
        );
      case 'text':
      default:
        return (
          <Form.Control
            type="text"
            value={String(editedData[field.key])}
            onChange={(e) => handleInputChange(field.key, e.target.value as T[keyof T])}
          />
        );
    }
  };

  return (
    <>
      <h1>{title}</h1>
      <Form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <Form.Group key={String(field.key)} className="mb-3">
            <Form.Label><strong>{field.label}:</strong></Form.Label>
            {renderField(field)}
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
