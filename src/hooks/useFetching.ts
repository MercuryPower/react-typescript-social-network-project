import {useState} from "react";

type FetchingResult = [() => void, boolean, string];
export const useFetching = (callback: () => Promise<void>):FetchingResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async() => {
        try{
            setIsLoading(true);
            await callback();
        } catch(e){
            setError((e as Error).message);
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error];
}