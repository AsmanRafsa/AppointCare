import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Service from "../components/Service";
export default function Home() {
  return (
    <div>
        <Nav />
        <Hero />
      <Service />
      <Main />
      <Footer />
    </div>
  );
}
