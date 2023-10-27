import { createRoot } from "react-dom/client";
import Test from "./Test";

const root = createRoot(document.querySelector('#root') as HTMLElement);
root.render(<Test />)
