import { Suspense, useEffect } from "react";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { auth, isMobileDevice } from "./libs/firebaseHelper";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Generator from "./pages/Generator";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";
import { QRCodeProvider } from "./contexts/QRCodeContext";
import { getToken, signInUser } from "./libs/storageHelper";
import { getRedirectResult } from "firebase/auth";

interface AuthComponentProps {
  allowedRoles: string[];
}

const PrivateRoute = ({ allowedRoles }: AuthComponentProps) => {
  if (!getToken()) {
    return <Navigate to="/" />;
  }
  // const roleStr = getRole();
  const userRole = ["user"];
  if (!allowedRoles.some((role) => userRole.includes(role))) {
    // TODO: Redirect to unauthorized page
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

function AppLaunch() {
  const completeLogin = async () => {
    if (isMobileDevice()) {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          // This is the signed-in user
          const user = result.user;
          signInUser(user);
          window.location.href = window.location.origin + "/analytics";
        }
      } catch (e) {
        //alert(e);
      }
    }
  };

  useEffect(() => {
    try {
      const uid = getToken();
      if (!uid) {
        completeLogin();
      }
      return () => {};
    } catch (e) {
      console.log("Error: ", e);
    }
  }, []);

  return <div></div>;
}

function App() {
  return (
    <QRCodeProvider>
      <Suspense fallback={<div className="lazy"></div>}>
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="generator" element={<Generator />} />
              <Route element={<PrivateRoute allowedRoles={["user"]} />}>
                <Route path="analytics" element={<Analytics />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <AppLaunch />
        </>
      </Suspense>
    </QRCodeProvider>
  );
}

export default App;
