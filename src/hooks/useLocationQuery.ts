import { useLocation } from "react-router-dom";

const useLocationQuery = () => {
    return new URLSearchParams(useLocation().search);
};

export default useLocationQuery;