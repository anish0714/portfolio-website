import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ProjectDetailPage from "./pages/ProjectDetailPage";

export default function App() {
  return (
    <div className="min-h-screen bg-canvas text-fg">
      <Header />
      <Sidebar />
      <main className="lg:ml-[26rem] xl:ml-[30rem]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
