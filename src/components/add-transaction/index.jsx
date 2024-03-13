import {
  FormControl,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

export default function TransactionForm() {
  return (
    <Modal>
      <form>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormControl>Enter Description</FormControl>
              <input placeholder="Enter Transaction description" name="description" type="text"/>
            </FormControl>
          </ModalBody>
        </ModalContent>
      </form>
    </Modal>
  );
}
