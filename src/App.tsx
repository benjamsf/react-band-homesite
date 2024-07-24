import Router from "./Router";
import { LoadingProvider } from "./components/loading/LoadingProvider";
import { useTranslation } from "react-i18next";

function App() {
  return (
    <LoadingProvider>
      <Content />
    </LoadingProvider>
  );
}

const Content = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation();

  return (
    <div className="relative">
      <div className="opacity-100">
        <Router />
      </div>
    </div>
  );
};
export default App;
