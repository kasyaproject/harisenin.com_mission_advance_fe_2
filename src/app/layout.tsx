"use client";

import "../css/index.css";
import { Provider } from "react-redux";
import { store } from "@/lib/redux/store";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
