import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ReactGA from "react-ga";
const TRACKING_ID = "G-RE2K0LT6T1";
ReactGA.initalize(TRACKING_ID);
useEffect(()=>{
  pageView(loaction.pathname + LOCATION>SEARCH);
},[location]);
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
