import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import UserAvatar from "../Components/Avatar";
import GiftCard from "../ButtonTest";


const GiftList = () => {
    const [gifts, setGifts] = useState([]);
    const [loading, setLoading] = useState([]);
    const [error, setError] = useState([]);

    const fetchGifts = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'gifts'));
            const giftData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log(giftData);
        } catch (err) {

        } finally {

        }
    };

    useEffect(() => {
        fetchGifts();
    }, []);

    if (loading) {
        return <p>Carregando presentes...</p>
    }

    if (error) {
        return <p>{error}</p>
    }

    return (
        gifts.map(gift => (
            GiftCard(gift.name)
        ))
    );
};

export default GiftList;

