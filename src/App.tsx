import EnvInfo from "@/components/envInfo/EnvInfo";
import logo from "./assets/logo.png";

export default function App() {
  return (
    <main>
      <img src={logo} alt="logo" />
      <h1>Hello React + Webpack</h1>
      <p>This is a simple React application bundled with Webpack.</p>
      <EnvInfo />
    </main>
  );
}
