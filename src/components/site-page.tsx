import Navbar from "./navbar";
import Footer from "./footer";

export default function SitePage({ children }: { children: React.ReactNode }) {
  return (
    <div id="top">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
