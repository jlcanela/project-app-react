import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { Alert } from "react-bootstrap";
import EditProject from "../components/EditProject";
import ViewProject from "../components/ViewProject";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsEditMode(searchParams.get("mode") === "edit");
  }, [searchParams]);

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    navigate(isEditMode ? `/projects/${id}` : `/projects/${id}?mode=edit`);
  };

  if (!id) {
    return (
      <Alert variant="warning">
        Project ID not found
      </Alert>
    );
  }

  return (
    <>
      {isEditMode ? (
        <EditProject
          projectId={id}
          onUpdateSuccess={toggleEditMode}
          onCancel={toggleEditMode}
          onBack={() => navigate("/projects")}
        />
      ) : (
        <ViewProject
          projectId={id}
          onEdit={toggleEditMode}
          onBack={() => navigate("/projects")}
        />
      )}
    </>
  );
};

export default ProjectDetail;
