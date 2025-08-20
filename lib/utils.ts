import { useEffect, useState } from 'react';

// Utility function to debounce input
export const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler); // Cleanup on unmount
        };
    }, [value, delay]);

    return debouncedValue;
};

// Utility function to format currency
export const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

// Utility function to fetch data from an API
export const fetchData = async (url: string): Promise<any> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};

// Utility function to check if a value is in an array
export const isInArray = (value: any, array: any[]): boolean => {
    return array.includes(value);
};

// Default export
export default {
    useDebounce,
    formatCurrency,
    fetchData,
    isInArray,
};