import React from "react"
import {
    Modal,
    Text,
    HStack
} from "native-base"


const ModalMessage = ({ title, message, show, children }) => {
    return (
        <Modal isOpen={show}  size="xl">
            <Modal.Content maxWidth="400px">
                <Modal.Header >
                    <Text fontSize="xl" fontWeight="bold">
                        {title}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Text fontSize="xl">
                        {message}
                    </Text>
                </Modal.Body>
                <Modal.Footer>
                    <HStack space={4}>
                        {children}
                    </HStack>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default ModalMessage;