import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const App = () => {
	return <div>Hi there !</div>;
};

createRoot(document.getElementById("root")).render(<App />);
