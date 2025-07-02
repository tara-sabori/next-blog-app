import vazirFont from "@/constants/localFont";
import "./styles/globals.css";
import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import AuthProvider from "@/context/AuthContex";
export const metadata = {
  title: {
    template: '%s | بلاگ اپ',
    default: 'بلاگ اپ'
  },
  description: "اپلیکیشن مدیریت بلاگ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="ligth-mode">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <AuthProvider>
          <Toaster />
          {/* <div className="container xl:max-w-screen-xl"> */}
            {children}
          {/* </div> */}
        </AuthProvider>
      </body>
    </html>
  );
}
