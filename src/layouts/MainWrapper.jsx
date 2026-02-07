import { useEffect, useState } from "react";
import { setUser } from "../utils/auth";

const MainWrapper = ({ children }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handler = async () => {
            setLoading(true);

            const token = localStorage.getItem('refresh_token'); 
            
            if (!token) {
                setLoading(false);
                return; // 🛑 Stop! Don't run setUser()
            }

            try {
                await setUser();
            } catch (error) {
                console.error("Error setting user", error);
            }

            setLoading(false);
        };

        handler();
    }, []);

    return <>{loading ? null: children}</>;
};

export default MainWrapper;