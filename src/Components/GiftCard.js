import { Badge, Box, Container, Image, Text } from '@chakra-ui/react';
import React from 'react';

const GiftCard = ({ name, description, price, reserved, imageUrl}) => {
  return (
    <Box  
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    shadow="md"
    maxW='100%'
    p={4}>
      <Image
      src={imageUrl}
      alt={name}
      boxSize="200px"
      objectFit="cover" // Ajusta o tamanho da imagem para preencher o espaço
      mx="auto"
    />
      <Text fontSize="xl" fontWeight="bold">
        {name}
      </Text>
      <Text mt={2} color="gray.600" maxW='300px'>
        {description}
      </Text>
      <Text mt={2} fontWeight="bold">
        R$ {price}
      </Text>
      <Badge mt={2} colorScheme={reserved ? 'red' : 'green'}>
        {reserved ? 'Reservado' : 'Disponível'}
      </Badge>
    </Box>
  );
};

export default GiftCard;
