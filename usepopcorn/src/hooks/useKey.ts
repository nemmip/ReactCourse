import {useEffect} from "react";

export function useKey(key:string, callback: () => void) {
    useEffect(() => {
        const escapeListener = (e: KeyboardEvent) => {
            if (e.code.toLowerCase() === key.toLowerCase()) {
                callback();
            }
        }

        document.addEventListener('keydown', escapeListener);
        return () => {
            document.removeEventListener('keydown', escapeListener);
        }
    }, [key, callback]);
}