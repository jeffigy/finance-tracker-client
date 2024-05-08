import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import { FinancialRecordProvider } from "./context/financial-record-context";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <FinancialRecordProvider>
                <Dashboard />
              </FinancialRecordProvider>
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
