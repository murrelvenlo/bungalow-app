import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "./util/Loader";
import DefaultLayout from "./layout/DefaultLayout";
import PageTitle from "./components/ui/PageTitle";
import SignIn from "./components/ui/pages/Authentication/SignIn";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <Routes>
        <Route index />
        <Route path="/calendar" />
        <Route path="/profile" />
        <Route path="/forms/form-elements" />
        <Route path="/forms/form-layout" />
        <Route path="/tables" />
        <Route path="/settings" />
        <Route path="/chart" />
        <Route path="/ui/alerts" />
        <Route path="/ui/buttons" />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Aanmelden | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <SignIn />
            </>
          }
        />
        <Route path="/auth/signup" />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
