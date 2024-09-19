// ProjectDetail.tsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { graphql } from '../graphql';
import { request } from 'graphql-request'
import graphQLConfig from '../api/graphqlConfig';
import ViewProject from '../components/projects/ViewProject';
import EditProject from "../components/projects/EditProject";
import { Spinner, Alert, Container, Row, Col } from "react-bootstrap";
import { ProjectViewQuery } from '../graphql/graphql';

const projectViewQueryDocument = graphql(`
  query ProjectView($id: Int!) {
    projects_by_pk(id: $id) {
      ...ProjectDetailFields
    }
  }
`);

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project_id = id ? parseInt(id) : 0;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    setIsEditMode(searchParams.get("mode") === "edit");
  }, [searchParams]);
  
  const { data, isLoading, error } = useQuery<ProjectViewQuery['projects_by_pk']>({
    queryKey: ['projects', project_id],
    queryFn: async () => {
      const { projects_by_pk } = await request({
        ...graphQLConfig,
        document: projectViewQueryDocument,
        variables: {
          id: project_id
        }
      });
      return projects_by_pk;
    }
  });

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    navigate(isEditMode ? `/projects/${id}` : `/projects/${id}?mode=edit`);
  };

  if (isLoading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">An error occurred</Alert>;
  if (!data) return <Alert variant="warning">Project not found</Alert>;

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          {isEditMode ? (
            <EditProject
              projects_by_pk={data}
              onCancel={toggleEditMode}
              onBack={() => navigate("/projects")}
            />
          ) : (
            <ViewProject
              projects_by_pk={data}
              onEdit={toggleEditMode}
              onBack={() => navigate("/projects")}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetail;
