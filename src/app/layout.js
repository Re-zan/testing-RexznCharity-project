import Nabvar from "@/components/Nabvar";
import "./globals.css";
import { inter } from "@/utils/fonts";
import Footer from "@/components/Footer";
import ReactTanStackQueryProvider from "@/Provider/ReactTanStackQueryProvider";
import AuthProviders from "@/Provider/AuthProviders";

export const metadata = {
  title: "Re-zanCharity | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactTanStackQueryProvider>
          {/* AuthProvider */}
          <AuthProviders>
            {/* nabvar */}
            <Nabvar></Nabvar>

            {/* data */}
            {children}

            {/* footer */}
            <Footer></Footer>
          </AuthProviders>
        </ReactTanStackQueryProvider>
      </body>
    </html>
  );
}
