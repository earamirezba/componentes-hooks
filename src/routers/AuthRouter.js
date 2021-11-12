import { Route, Routes } from "react-router";
import Dashboard from "../components/Dashboard";
const AuthRouter = () => {
    return(
        <>

            <Routes>
                <Route path="/" element={<Dashboard/>} ></Route>
            </Routes>

        </>
    )
}

export default AuthRouter;