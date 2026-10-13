import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Hello there!");
  }, []);

  return (
    <main className="min-vh-100 d-flex text-center bg-dark">
        <div className="col-4" style={{backgroundColor:"red"}}></div>
        <div className="col-8" style={{backgroundColor:"blue"}}></div>
    </main>
  );
}
