import { Avatar, Box, Button, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import GiftList from "../Gift/GiftList";

const ListaPresente = () => {

    const navigate = useNavigate();

    const handleAddGiftClick = () => {
        navigate('add-gift');
    };

    return (
        <Box padding={2} width='100%'>
            <Center p={1}>
                <Avatar/>
                <Button colorScheme="blue" onClick={handleAddGiftClick}>
                    Adicionar item
                </Button>
            </Center>
            <Center>
                <GiftList />
            </Center>
        </Box>
    );
};

export default ListaPresente;