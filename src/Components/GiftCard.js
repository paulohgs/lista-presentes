import React from 'react';
import { Box, Heading, Text, Badge, Stack } from '@chakra-ui/react';

const GiftCard = ({ name, description, price, reserved }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      shadow="md"
      maxW="sm"
      bg="white"
    >
      <Stack spacing={3}>
        <Heading fontSize="xl">{name}</Heading>
        <Text>{description}</Text>
        <Text fontWeight="bold">R$ {price}</Text>
        <Badge
          colorScheme={reserved ? 'red' : 'green'}
          alignSelf="start"
        >
          {reserved ? 'Reservado' : 'Disponível'}
        </Badge>
      </Stack>
    </Box>
  );
};

export default GiftCard;
