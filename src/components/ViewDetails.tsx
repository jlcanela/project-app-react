import React from "react";
import { Button } from "react-bootstrap";

type FieldConfig<T> = {
  label: string;
  key: keyof T;
  render?: (value: any) => React.ReactNode;
};

type ViewDetailsProps<T> = {
  data: T;
  fields: FieldConfig<T>[];
  title: string;
  onEdit?: () => void;
  onBack?: () => void;
};

export function ViewDetails<T>({ data, fields, title, onEdit, onBack }: ViewDetailsProps<T>) {
  if (!data) {
    return <span>Data not loaded</span>;
  }

  return (
    <>
      <h1>{title}</h1>
      {fields.map((field) => (
        <p key={field.key as string}>
          <strong>{field.label}:</strong>{" "}
          {field.render ? field.render(data[field.key]) : String(data[field.key])}
        </p>
      ))}
      {onEdit && (
        <Button variant="primary" onClick={onEdit}>
          Edit
        </Button>
      )}
      {onBack && (
        <Button variant="secondary" className="ms-2" onClick={onBack}>
          Back
        </Button>
      )}
    </>
  );
}
