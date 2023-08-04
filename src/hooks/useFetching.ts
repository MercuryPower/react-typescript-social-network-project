import {useState} from "react";

type FetchingResult = [(limit: number, page: number) => void, boolean, string];
export const useFetching = (callback: (...args:number[]) => Promise<void>):FetchingResult => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async(...args:any[]) => {
        try{
            setIsLoading(true);
            await callback(...args);
        } catch(e){
            setError((e as Error).message);
        } finally {
            setIsLoading(false)
        }
    }
    return [fetching, isLoading, error];
}