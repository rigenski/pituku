// templates
import About from "./components/templates/about";
import Counter from "./components/templates/counter";
import Feature from "./components/templates/feature";
import Footer from "./components/templates/footer";
import Hero from "./components/templates/hero";
import Nav from "./components/templates/nav";
import Payment from "./components/templates/payment";
import Promotions from "./components/templates/promotions";
import Testimonials from "./components/templates/testimonials";

function App() {
  return (
    <>
      <Nav />
      <main className="pt-20 bg-white">
        <Hero />
        <About />
        <Feature />
        <Payment />
        <Promotions />
        <Testimonials />
        <Counter />
      </main>
      <Footer />
    </>
  );
}

export default App;
