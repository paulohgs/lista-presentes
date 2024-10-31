import { Box, Container, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import GiftCard from "../../Components/GiftCard";
import { db } from "../../firebase";


const GiftList = () => {
    const [gifts, setGifts] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        try {
            const fetchData = async () => {
                const giftData = [];
                const querySnapshot = await getDocs(collection(db, 'gifts'));
                querySnapshot.forEach((doc) => {
                  giftData.push({ id: doc.id, ...doc.data() });
                });
                setGifts(giftData);
            };
            fetchData();
        } catch (err) {
            console.error('Erro ao adicionar presente: ', err);
        } finally {
            setLoading(false);
        }
        
    }, []);

    if(loading) {
        return (<div>Carregando presentes...</div>)
    }

    return (
        <SimpleGrid
            minChildWidth='250px' spacing='40px'
      >
        {gifts.map((gift, index) => (
          <GiftCard
          key={index}
          name={gift.name}
          description={gift.description}
          price={gift.price}
          reserved={gift.reserved}
          imageUrl={gift.imageUrl}
        />
        ))}
      </SimpleGrid>
    );
};

export default GiftList;

