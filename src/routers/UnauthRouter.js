import { Route, Routes } from "react-router";
import Login from "../components/Login";
import MiPrimerComponente from "../components/MiPrimerComponente";

const UnauthRouter = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} ></Route>
                <Route path="micomponente" element={MiPrimerComponente}></Route>
            </Routes>
        </div>
    )
}

export default UnauthRouter;
