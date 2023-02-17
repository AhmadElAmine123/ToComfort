import {useState, useEffect, useMemo, useRef} from 'react';

export default function useApi(url, options) {
    const [response, setResponse] = useState({
        loading: false,
        success: false,
        data: null,
        error: null,
    });
    const raceFix = useRef(0);
    async function reload() {
        raceFix.current += 1;
        const oldRef = raceFix.current;
        setResponse((old) => ({
            ...old,
            loading: true,
        }));
        const result = await fetch(url, options);
        if (oldRef !== raceFix.current) return;
        if (result.statusText === 'OK') {
            setResponse({
                success: true,
                data: await result.json(),
                loading: false,
                error: null,
            })
        } else {
            setResponse({
                success: false,
                loading: false,
                error: 'err',
                data: null,
            })
        }
    }
    useEffect(() => {
        reload();
    }, [url, options]);
    const result = useMemo(() => {
        return {
            ...response,
            reload,
        }
    }, [response]);
    return result;
}
