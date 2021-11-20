import React from "react"
import {
    Modal,
    Text,
    HStack
} from "native-base"


const ModalWithCheckboxMessage = ({ title, message, show, setAcept, children }) => {
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
                    <InputCheckbox text="Si, acepto las condiciones" setValue={(i)=>console.log(i)} />
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

export default ModalWithCheckboxMessage;