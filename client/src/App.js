import { useState, useContext, useEffect } from "react";
import AppRouter from "./AppRouter";
import { GetUser } from "@Context/user/userActions";
import { UserContext } from "@Context/user/userContext";
import { getAuthUser } from "@Services/auth";
import SocketService from "@Services/socket";

function App() {
    const [isFetching, setIsFetching] = useState(true);
    const { dispatch } = useContext(UserContext);

    useEffect(() => {
        SocketService.connect(process.env.REACT_APP_API_URL)
            .then(() => {})
            .catch((err) => {
                console.log(`Error: ${err}`);
            });
    }, []);

    // When the page is rendered, check for logged in user
    useEffect(() => {
        getAuthUser()
            .then(({ data }) => {
                dispatch(GetUser(data));
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
