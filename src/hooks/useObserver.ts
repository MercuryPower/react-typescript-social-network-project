import React, {useEffect, useRef} from "react";


export const useObserver = (ref:React.RefObject<Element>,  canLoad:boolean, isLoading:boolean, hasPostsToLoad:boolean, callback:() => void) => {
    const observer = useRef<IntersectionObserver>();
    useEffect(() => {
        if(isLoading) return;
        if(observer.current) observer.current?.disconnect();
        const obsCallback: IntersectionObserverCallback = (entries) => {
            if(entries[0].isIntersecting && canLoad && hasPostsToLoad){
                callback();
            }

        }
        observer.current = new IntersectionObserver(obsCallback);
        if (ref.current) {
            observer.current.observe(ref.current);
        }

    }, [callback, canLoad, hasPostsToLoad, isLoading, ref])


}