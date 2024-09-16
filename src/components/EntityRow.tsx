// EntityRow.tsx
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export type FieldConfig<T> = {
  key: keyof T;
  label: string;
  render?: (value: T[keyof T]) => React.ReactNode;
};

export type EntityRowProps<T> = {
  entity: T;
  fields: FieldConfig<T>[];
  idField: keyof T;
  entityName: string;
};

export function EntityRow<T>({ entity, fields, idField, entityName }: EntityRowProps<T>) {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/${entityName}/${entity[idField]}`);
  };

  const handleEdit = () => {
    navigate(`/${entityName}/${entity[idField]}?mode=edit`);
  };

  return (
    <tr>
      {fields.map((field) => (
        <td key={field.key as string}>
          {field.render 
            ? field.render(entity[field.key])
            : String(entity[field.key])
          }
        </td>
      ))}
      <td>
        <Button variant="primary" size="sm" className="me-2" onClick={handleView}>
          View
        </Button>
        <Button variant="secondary" size="sm" className="me-2" onClick={handleEdit}>
          Edit
        </Button>
      </td>
    </tr>
  );
}
