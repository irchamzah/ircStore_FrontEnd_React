import Footer from "../components/Footer";
import Header from "../components/Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        {/* <LeftSidebar /> */}

        <main className="flex-1">
          <div className="bg-gray-50 dark:bg-gray-900 h-full">{children}</div>
        </main>

        {/* <RightSidebar /> */}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
