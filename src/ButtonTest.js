import { Box, Text, Button, Image } from '@chakra-ui/react';

function GiftCard(name) {
    return (
        <Box p={5} shadow={'md'} borderWidth={'1px'} width={300} borderRadius={10}>
            <Text fontSize={'xl'}>{name}</Text>
            <Text mt={4}>Descricao da cafeteira</Text>
            <Image src='https://maquinasecafe.com.br/media/catalog/product/1/9/19520012-433e0a33.webp'/>
            <Button mt={4} colorScheme='teal'>Reservar</Button>
        </Box>
    );
}

export default GiftCard;