import MiPrimerComponente from "./MiPrimerComponente";
import { RecibirProps } from "./RecibirProps";
import { useState } from "react";
import { Navigate } from "react-router";

export const Dashboard = ({ autorizado }) => {
  const [result, setResult] = useState("");

  const handleResult = (newResult) => {
    setResult(newResult);
  };

  return (
    <>
      {autorizado ? (
        <div>
          <MiPrimerComponente handleResult={handleResult} />
          <RecibirProps result={result} />
        </div>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </>
  );
};
