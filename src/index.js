import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
    const [coinData, setCoinData] = useState([]);
    const [mode, setMode] = useDarkMode();

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
            )
            .then(res => setCoinData(res.data))
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        if (mode) {
            document.body.className = 'dark-mode';
        } else {
            document.body.className = '';
        }
    }, [mode]);

    const toggleMode = () => {
        setMode(!mode);
    }

    return (
        <div className="App">
            <Navbar mode={mode} toggleMode={toggleMode} />
            <Charts coinData={coinData} />
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
