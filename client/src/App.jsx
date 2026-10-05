import Landing from "./pages/Landing";

export default function App() {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  return <Landing onLogin={handleLogin} />;
}