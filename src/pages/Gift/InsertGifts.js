import { Alert, AlertIcon, Box, Button, FormControl, FormLabel, Input, NumberInput, NumberInputField, Textarea } from '@chakra-ui/react';
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";

const AddGiftForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [link, setLink] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        const giftData = {
            name, 
            description, 
            price,
            imageUrl,
            link,
            reserved: false
        };

        try {
            await addDoc(collection(db, 'gifts'), giftData);
            setSuccess(true);
            setName('');
            setDescription('');
            setPrice(0);
            setImageUrl('')
            setLink('')
        } catch (err) {
            setError(`Erro ao adicionar presente. Tentar novamente.${err}`);
        } finally {
            setLoading(false);
            navigate('/');
        };
    };

    return (
        <Box maxWidth="500px" mx="auto" mt={5} p={5} border="1px" borderRadius="md" borderColor="gray.200">
          <form onSubmit={handleSubmit}>
            <FormControl id="name" isRequired mb={4}>
              <FormLabel>Nome do Presente</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite o nome do presente"
              />
            </FormControl>
    
            <FormControl id="description" isRequired mb={4}>
              <FormLabel>Descrição</FormLabel>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Digite a descrição do presente"
              />
            </FormControl>
    
            <FormControl id="price" isRequired mb={4}>
              <FormLabel>Preço</FormLabel>
              <NumberInput>
                <NumberInputField 
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Digite o preço do produto"
                />
              </NumberInput>
            </FormControl>

            <FormControl id="link" isRequired mb={4}>
              <FormLabel>Link do produto</FormLabel>
              <Textarea
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="Digite o link para o produto"
              />
            </FormControl>

            <FormControl id="imageUrl" isRequired mb={4}>
              <FormLabel>Link da imagem</FormLabel>
              <Textarea
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Digite o link para a imagem do produto"
              />
            </FormControl>
    
            <Button
              colorScheme="blue"
              isLoading={loading}
              type="submit"
              width="100%"
            >
              Adicionar Presente
            </Button>
          </form>
    
          {success && (
            <Alert status="success" mt={4}>
              <AlertIcon />
              Presente adicionado com sucesso!
            </Alert>
          )}
    
          {error && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              {error}
            </Alert>
          )}
        </Box>
      );
};

export default AddGiftForm;

