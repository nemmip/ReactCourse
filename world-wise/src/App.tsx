import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";


import Product from "./pages/Product.tsx";
import Pricing from "./pages/Pricing.tsx";
import Homepage from "./pages/Homepage.tsx";
import PageNotFound from "./pages/PageNotFound.tsx";
import AppLayout from "./pages/AppLayout.tsx";
import Login from "./pages/Login.tsx";
import CityList, { type City } from "./components/CityList.tsx";
import CountryList from "./components/CountryList.tsx";

const URL = 'http://localhost:9000'

const App = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchCities() {
            try {
                const res = await fetch(`${URL}/cities`);
                const data = await res.json();
                setCities(data);
            }
            catch {
                alert("There was an error loading data...");
            } finally {
                setIsLoading(false);
            }
        }

        fetchCities();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Homepage />} />
                <Route path="product" element={<Product />} />
                <Route path="pricing" element={<Pricing />} />
                <Route path="Login" element={<Login />} />
                <Route path="app" element={<AppLayout />}>
                    <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
                    <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
                    <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading}/>} />
                    <Route path="form" element={<p>Form</p>} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;