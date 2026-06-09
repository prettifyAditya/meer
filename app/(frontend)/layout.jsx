import "@/app/globals.css";
import { Noto_Sans } from "next/font/google";
import MainTemplate from "@/components/frontendcomponent/template/MainTemplate";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata = {
  title: "Meer",
  description: "",
  icons: {
    icon: "/image/favicon.png",
    type: "image/png",
    sizes: "any",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable}`} cz-shortcut-listen="true">
        <MainTemplate>{children}</MainTemplate>
      </body>
    </html>
  );
}
