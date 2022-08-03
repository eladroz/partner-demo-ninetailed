import "normalize.css";
import "../../styles/global.css";
import { NinetailedProvider } from "@ninetailed/experience.js-next";
import { Toaster } from "react-hot-toast";
import { VariantChoicesProvider } from "../utils/ninetailed";

function MyApp({ Component, pageProps }) {
  return (
    <NinetailedProvider clientId={process.env.NINETAILED_API_KEY} environment={process.env.NINETAILED_ENVIRONMENT}>
      <VariantChoicesProvider>
        <Component {...pageProps} />
        <Toaster position="bottom-right" />
      </VariantChoicesProvider>
    </NinetailedProvider>
  );
}

export default MyApp;
