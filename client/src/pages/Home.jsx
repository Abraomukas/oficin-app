import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Hello there!");
  }, []);

  return null; 
}