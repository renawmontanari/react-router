
import { useState, useEffect } from "react";

// Custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // Refatorando post
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(null);

    // Loading
    const [loading, setLoading] = useState(false);

    // Tratando erros
    const [error, setError] = useState(null);

    // Desafio 6
    const [itemId, setItemId] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            });
            setMethod(method);
        } else if(method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
            });
            setMethod(method);
            setItemId(data);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            // Loading
            setLoading(true);

            try {
                const res = await fetch(url);

                const json = await res.json();

                setData(json);

            } catch (error) {
                console.log(error.message);

                setError("Houve algum erro ao carregar os dados!");
            }

            setLoading(false);
        };

        fetchData();
    }, [url, callFetch]);

    // Refatorando post
    useEffect(() => {
        const httpRequest = async () => {

            let json;

            if(method === "POST") {
                let fetchOptions = [url, config];
    
                const res = await fetch(...fetchOptions);
    
                const json = await res.json();
    
                setCallFetch(json);
            } else if(method === "DELETE") {
                const deleteUrl = `${url}/${itemId}`;

                const res = await fetch(deleteUrl, config);

                json = await res.json();
            }
            setCallFetch(json);
        };
        httpRequest();
    }, [config, method, url]);

    return { data, httpConfig, loading, error };
};