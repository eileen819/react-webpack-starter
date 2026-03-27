import EnvInfo from "@/components/envInfo/EnvInfo";
import logo from "./assets/logo.png";
import { lazy, Suspense, useState } from "react";

const LazyMessage = lazy(() => import("@/components/LazyMessage"));

export default function App() {
  const [showLazy, setShowLazy] = useState(false);

  return (
    <main>
      <img src={logo} alt="logo" />
      <h1>Hello React + Webpack</h1>
      <p>This is a simple React application bundled with Webpack.</p>
      <EnvInfo />
      <button type="button" onClick={() => setShowLazy((prev) => !prev)}>
        {showLazy ? "Hide Lazy Component" : "Show Lazy Component"}
      </button>
      {showLazy && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyMessage />
        </Suspense>
      )}
    </main>
  );
}
