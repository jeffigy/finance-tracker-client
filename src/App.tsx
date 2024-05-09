import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";
import { FinancialRecordProvider } from "./context/financial-record-context";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col ">
        <div className="flex h-14  w-full mb-8 items-center justify-between px-8 ">
          <Link to={"/"}>Dashboard</Link>
          <SignedIn>
            <UserButton appearance={{ baseTheme: dark }} />
          </SignedIn>
        </div>
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
