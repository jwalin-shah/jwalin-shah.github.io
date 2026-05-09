import React from "react";
import { createRoot } from "react-dom/client";
import "../data.jsx";
import EditorialDir from "../dir-editorial.jsx";

const App = () => <EditorialDir />;

createRoot(document.getElementById("root")).render(<App />);
