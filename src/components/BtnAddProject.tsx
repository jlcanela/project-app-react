import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProject } from '../api/projects';
import { Modal, Form, Button } from 'react-bootstrap';

const BtnAddProject: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', description: '' });

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const createProjectMutation = useMutation({
    mutationFn: async ({ name, description }: { name: string; description: string }) => {
      const accessToken = await getAccessTokenSilently();
      return createProject(accessToken, name, description);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    createProjectMutation.mutate(newProject);
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>+</Button>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Project Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newProject.name}
                onChange={handleInputChange}
                placeholder="Enter project name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={newProject.description}
                onChange={handleInputChange}
                placeholder="Enter project description"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BtnAddProject;
