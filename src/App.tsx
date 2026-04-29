import { useState } from "react";
import { AppShell } from "./components/AppShell";
import { Home } from "./pages/Home";
import { TrendReport } from "./pages/TrendReport";
import { SoothingControl } from "./pages/SoothingControl";
import { MoreInfo } from "./pages/MoreInfo";
import { AICareUpload } from "./pages/AICareUpload";
import { AIAnalysis } from "./pages/AIAnalysis";
import { VetSummary } from "./pages/VetSummary";

export type Page =
  | "home"
  | "trend"
  | "soothing"
  | "more"
  | "aiUpload"
  | "aiAnalysis"
  | "vetSummary";

const pagesWithTabs: Page[] = ["home", "trend", "soothing"];

function App() {
  const [page, setPage] = useState<Page>("home");

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
  };

  const activeTab = pagesWithTabs.includes(page) ? page : undefined;

  return (
    <AppShell activeTab={activeTab} onNavigate={navigate} screenKey={page} showBottomNav={Boolean(activeTab)}>
      {page === "home" && <Home onNavigate={navigate} />}
      {page === "trend" && <TrendReport />}
      {page === "soothing" && <SoothingControl />}
      {page === "more" && <MoreInfo onNavigate={navigate} />}
      {page === "aiUpload" && <AICareUpload onNavigate={navigate} />}
      {page === "aiAnalysis" && <AIAnalysis onNavigate={navigate} />}
      {page === "vetSummary" && <VetSummary onNavigate={navigate} />}
    </AppShell>
  );
}

export default App;
