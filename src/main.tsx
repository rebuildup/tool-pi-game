import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import PiGameApp from "./PiGameApp";
import "./styles.css";

const container = document.getElementById("root");

if (!container) {
	throw new Error("PiGame: missing #root element");
}

createRoot(container).render(
	<StrictMode>
		<PiGameApp />
	</StrictMode>,
);
