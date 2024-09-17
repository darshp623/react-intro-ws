import Home from "./home_subpages/home.js";
import Data from "./home_subpages/data.js";
import Navbar from "./components/navbar.js";
import Footer from "./components/footer.js";

export default function Main() {
  return (
    <main className="absolute inset-0">
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="data">
        <Data />
      </div>
      <Footer />
    </main>
  );
}
