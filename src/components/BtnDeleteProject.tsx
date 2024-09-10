import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteProject } from '../api/projects';
import { Button, Modal } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

interface BtnDeleteProjectProps {
  projectId: string;
}

const BtnDeleteProject: React.FC<BtnDeleteProjectProps> = ({ projectId }) => {
  const [showModal, setShowModal] = useState(false);
  const { getAccessTokenSilently } = useAuth0();
  const queryClient = useQueryClient();

  const deleteProjectMutation = useMutation({
    mutationFn: async (id: string) => {
      const accessToken = await getAccessTokenSilently();
      return deleteProject(accessToken, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      setShowModal(false);
    },
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleDelete = () => {
    console.log('handle delete');
    deleteProjectMutation.mutate(projectId);
  };

  return (
    <>
      <Button
        variant="danger"
        size="sm"
        onClick={handleShow}
      >
        <Trash /> Delete
      </Button>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this project?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button 
            variant="danger" 
            onClick={handleDelete}
            disabled={deleteProjectMutation.isPending}
          >
            {deleteProjectMutation.isPending ? 'Deleting...' : 'Delete'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BtnDeleteProject;
