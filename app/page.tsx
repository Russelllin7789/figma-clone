import dynamic from "next/dynamic";

// since canvas is not SSR allowed, we need to use dynamic import
const App = dynamic(() => import("./App"), { ssr: false });

export default App;
