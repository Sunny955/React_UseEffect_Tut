import "./styles.css";
import MyFunc from "./useEffect1";
import HooksMouse from "./HooksMouse";
import MouseContainer from "./MouseContainer";
import IntervalHook from "./IntervalHook";

export default function App() {
  return (
    <div className="App">
      <MyFunc />
      {/* <HooksMouse /> */}
      <MouseContainer />
      <IntervalHook />
    </div>
  );
}
