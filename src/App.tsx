import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet"));
  }

  return (
    <div className="container">
      <div className="row">
        <div>
          <input
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <button onClick={() => greet()}>
            Greet
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
