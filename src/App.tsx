import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = React.lazy(() => import("./components/sidebar/Sidebar"));
const Loading = React.lazy(() => import("./components/general/Loading"));
const Dashboard = React.lazy(() => import("./pages/dashbaord/page"));
const NotFound = React.lazy(() => import("./pages/notFound/page"));

const App = () => {
  return (
    <div className="flex bg-gray-100 h-full w-fll">
      <aside className="fixed xl:sticky top-0 z-10 h-screen">
        <Suspense
          fallback={
            <Loading>
              <span className="text-gray-900 font-bold">Loading...</span>
            </Loading>
          }
        >
          <Sidebar />
        </Suspense>
      </aside>
      <main className="py-8 main-container xl:max-w-1200 xl:mx-auto">
        <Suspense
          fallback={
            <Loading>
              <span className="text-gray-900 text-3xl font-bold">
                Loading...
              </span>
            </Loading>
          }
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <ToastContainer
        position="bottom-right"
        className="custom-toast"
        autoClose={2000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        draggable={true}
      />
    </div>
  );
};

export default App;
