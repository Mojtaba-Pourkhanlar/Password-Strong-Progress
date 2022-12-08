import { useState } from "react";
import PassProgress from "./components/PassProgress";

const AppContainer = () => {
  const [password, setPassword] = useState("");
  return (
    <div>
      <div style={{ width: "300px" }}>
        <h3>Password Progress</h3>
        <div>
          <input
            style={{ width: "100%", marginBottom: "10px", padding: "10px" }}
            type="text"
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PassProgress password={password} />
      </div>
    </div>
  );
};

export default AppContainer;
