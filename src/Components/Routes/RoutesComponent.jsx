import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./RoutesComponent.css";
import Login from "../../Pages/Login/login";
const Home = React.lazy(() => import("../Home/home"));
const Navbar = React.lazy(() => import("../Navbar/Navbar"));
const SustainableProduct = React.lazy(() =>
  import("./../SustainabilityProducts/SustainabilityProducts")
);
const MyPortfolio = React.lazy(() =>
  import("../../Pages/MyPortfolio/MyPortfolioPage")
);
const LoyalityPoints = React.lazy(() =>
  import("./../LoyalityPoints/LoyalityPoints")
);
const Settings = React.lazy(() => import("./../Settings/Settings"));
const Model = React.lazy(() => import("./../Modal/Modal"));
const GreenMarketPlace = React.lazy(() =>
  import("./../GreenMarketPlace/GreenMarketPlace")
);
const AutoGreenLoan = React.lazy(() =>
  import("./../SustainabilityProducts/AutoGreenLoan")
);
const Auto_Loan = React.lazy(() =>
  import("./../SustainabilityProducts/Auto_Loan")
);

const RecentTransactions = React.lazy(() =>
  import("../../Pages/RecentTransaction/RecentTransactionPage")
);

export default function RoutesComponent() {
  return (
    <div className="router">
      <Suspense>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Login" element={<Login />} />
            <Route
              path="/SustainableProduct"
              element={<SustainableProduct />}
            />
            <Route path="recenttransactions" element={<RecentTransactions />} />
            <Route path="GreenMarketPlace" element={<GreenMarketPlace />} />
            <Route path="MyPortfolio" element={<MyPortfolio />} />
            <Route path="LoyalityPoints" element={<LoyalityPoints />} />
            <Route path="Settings" element={<Settings />} />
            <Route path="Model" element={<Model />} />
            <Route path="AutoGreenLoan" element={<AutoGreenLoan />} />
            <Route path="Auto_loan" element={<Auto_Loan />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}
