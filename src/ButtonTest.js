import { Box, Text, Button } from '@chakra-ui/react';

function GiftCard() {
    return (
        <Box p={5} shadow={'md'} borderWidth={'1px'} width={300} borderRadius={10}>
            <Text fontSize={'xl'}>Cafeteira</Text>
            <Text mt={4}>Descricao da cafeteira</Text>
            <Button mt={4} colorScheme='teal'>Reservar</Button>
        </Box>
    );
}

export default GiftCard;