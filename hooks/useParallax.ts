import { useEffect, useState } from 'react';

const useParallax = (scrollY: number) => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(scrollY * 0.5); // Adjust the multiplier for effect strength
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollY]);

    return offset; // Return the calculated offset for parallax effect
};

export default useParallax;