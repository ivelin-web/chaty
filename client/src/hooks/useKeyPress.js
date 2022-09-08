import { useEffect } from "react";

const useKeyPress = (targetKey, handler) => {
    function downHandler({ key }) {
        if (key === targetKey) {
            handler();
        }
    }

    useEffect(() => {
        window.addEventListener("keydown", downHandler);

        return () => {
            window.removeEventListener("keydown", downHandler);
        };
    }, [targetKey, handler]);
};

export default useKeyPress;
