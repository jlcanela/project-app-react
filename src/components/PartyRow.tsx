import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface PartyRowProps {
  party: {
    party_id: number;
    first_name: string;
    last_name: string;
    idp_id: string;
    party_roles: {
      role_type: {
        description: string;
      };
    }[];
  };
}

const PartyRow: React.FC<PartyRowProps> = ({ party }) => {
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/parties/${party.party_id}`);
  };

  const handleEdit = () => {
    navigate(`/parties/${party.party_id}?mode=edit`);
  };

  return (
    <tr>
      <td>{party.party_id}</td>
      <td>{party.first_name}</td>
      <td>{party.last_name}</td>
      <td>{party.idp_id}</td>
      <td>
        {party.party_roles.map((role) => role.role_type.description).join(", ")}
      </td>
      <td>
        <Button
          variant="primary"
          size="sm"
          className="me-2"
          onClick={handleView}
        >
          View
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="me-2"
          onClick={handleEdit}
        >
          Edit
        </Button>
      </td>
    </tr>
  );
};

export default PartyRow;
