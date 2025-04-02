import { useEffect, useRef, useState } from "react";

export const useInterSectionObserver = ({threshold =  0.1, root = null, rootMargin = '0px'}) =>{
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting){
                    setIsIntersecting(true);
                    observer.unobserve(entry.target);
                }
            },
            {threshold, root, rootMargin}
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold, root, rootMargin]);

    return [ref, isIntersecting];
}