import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const ModalConfirmDelete = () => (
  <Modal trigger={<Button>Basic Modal</Button>} basic size='small'>
    <Header icon='archive' content='Delete element' />
    <Modal.Content>
      <p>Are you sure you want to delete this element?</p>
    </Modal.Content>
    <Modal.Actions>
      <Button basic color='red' inverted>
        <Icon name='remove' /> No
      </Button>
      <Button color='green' inverted>
        <Icon name='checkmark' /> Yes
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalConfirmDelete
