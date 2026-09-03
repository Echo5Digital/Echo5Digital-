import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  title: "Thank You | Echo5 Digital",
  description:
    "Thank you for contacting Echo5 Digital. Your request has been received and a member of our team will be in touch with you shortly.",
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <ThankYouClient />
      <Footer
        email="hello@echo5digital.com"
        phone="713-489-7004"
        address="Houston / Sugar Land, Texas"
      />
    </>
  );
}