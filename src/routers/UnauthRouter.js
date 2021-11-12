import { Route, Routes } from "react-router";
import Login from "../components/Login";

const UnauthRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} ></Route>
            </Routes>
        </div>
    )
}

export default UnauthRouter;
