import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotFoundClient from "./NotFoundClient";

export const metadata: Metadata = {
  title: "Page Not Found | Echo5 Digital",
  description:
    "The page you're looking for doesn't exist or has been moved. Return to Echo5 Digital's homepage or explore our AI marketing, web design, and digital growth services.",
  alternates: {
    canonical: "https://echo5digital.com/404",
  },
};

export default function NotFoundPage() {
  return (
    <div
      style={{
        backgroundColor: "#0A0F1E",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
        <NotFoundClient />
      </main>
      <Footer
        phone="713-489-7004"
        email="hello@echo5digital.com"
        address="Houston / Sugar Land, Texas"
      />
    </div>
  );
}