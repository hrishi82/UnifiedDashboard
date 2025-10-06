import { Routes, Route } from "react-router";
import { Dashboard } from "./features/Dashboard";
import { Layout } from "./components/Layout";

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" index element={<Dashboard />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
