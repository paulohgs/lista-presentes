import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import GiftCard from "../../Components/GiftCard";


const GiftList = () => {
    const [gifts, setGifts] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const giftData = [];
            const querySnapshot = await getDocs(collection(db, 'gifts'));
            querySnapshot.forEach((doc) => {
              giftData.push({ id: doc.id, ...doc.data() });
            });
            setGifts(giftData);
            console.log(gifts)
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Lista de Presentes</h1>
            <ul>
                {
                    gifts.map(gift => (
                        <li key={gift.id}>
                            <GiftCard
                                name={gift.name}
                                price={gift.price}
                                description={gift.description}
                                reserved={gift.reserved}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default GiftList;

