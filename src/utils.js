import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
    const [data, setData] = useState(opts);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(url).then((response) => {
            setLoading(false);
            return response.json()
        }).then((answer) => setData(answer)).catch((err) => setError(err))

    }, [url])
    return [data, loading, error]
}