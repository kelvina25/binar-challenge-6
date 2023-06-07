import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import store from "./redux/store";
import MovieCard from "./pages/MovieCard";
import MovieDetails from "./pages/MovieDetails";
import Search from "./components/Search";
import { GoogleOAuthProvider } from "@react-oauth/google";
import RedirectIfProtected from "./components/RedirectIfProtected";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import Slider from "./components/Slider";
import MovieSearch from "./pages/MovieSeacrh";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    function handleContextMenu(e) {
      if (process.env.NODE_ENV !== "development") {
        e.preventDefault(); // prevents the default right-click menu from appearing
      }
    }

    // add the event listener to the component's root element
    const rootElement = document.getElementById("root");
    rootElement.addEventListener("contextmenu", handleContextMenu);
    // remove the event listener when the component is unmounted

    return () => {
      rootElement.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MovieCard />} />
            <Route
              path="/detail/:id"
              render={(props) => <MovieDetails {...props} />}
            />

            <Route path="/Search" element={<MovieSearch />} />

            <Route
              path="/user/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />

            <Route
              path="/register"
              element={
                <RedirectIfProtected>
                  <Register />
                </RedirectIfProtected>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectIfProtected>
                  <Login />
                </RedirectIfProtected>
              }
            />
          </Routes>

          {/* <ToastContainer theme="colored" /> */}
        </BrowserRouter>
      </GoogleOAuthProvider>
      <Footer />
    </Provider>
  );
}

export default App;
