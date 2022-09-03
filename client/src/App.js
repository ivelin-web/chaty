import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import AppRouter from "./AppRouter";
import { GetUser } from "./context/user/userActions";
import { UserContext } from "./context/user/userContext";
import { getAuthUser } from "./services/auth";

function App() {
    const [isFetching, setIsFetching] = useState(true);
    const { dispatch } = useContext(UserContext);

    // When the page is rendered, check for logged in user
    useEffect(() => {
        getAuthUser()
            .then((res) => {
                dispatch(GetUser(res.data));
            })
            .catch(({ response: err }) => {
                console.log(err);
            })
            .finally(() => {
                setIsFetching(false);
            });
    }, []);

    return isFetching ? null : <AppRouter />;
}

export default App;
