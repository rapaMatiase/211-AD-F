import React from "react"
import {
    Modal,
    Text,
    HStack,
    Radio,
    VStack,
    Center,
    FlatList
} from "native-base"
import MyButton from "./MyButton"

const ModalInputRadio = ({ title, list, show, setShow, setValueSelect }) => {
    return (
        <Modal isOpen={show} size="xl">
            <Modal.Content maxWidth="400px">
                <Modal.Header >
                    <Text fontSize="xl" fontWeight="bold">
                        {title}
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <Radio.Group
                        name="myRadioGroup"
                        accessibilityLabel="favorite number"
                        value={value}
                        onChange={(nextValue) => {
                            setValueSelect(nextValue)
                        }}
                    >
                        <FlatList 
                            data={list}
                            renderItem={({item}) => <Radio value={item} my={1}> {item} </Radio>}
                        />
                    </Radio.Group>
                </Modal.Body>
                <Modal.Footer>
                    <MyButton text="Cerra" onPress={()=>{setShow(false)} } />
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    )
}

export default ModalInputRadio;