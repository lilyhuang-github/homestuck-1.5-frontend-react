import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <br/>
    <p style={{'font-family': 'Arial, Helvetica, sans-serif;'}}>
    Hi, welcome. 
    <br/>
    This is my little unofficial project surrounding Homestuck. It's intentions are to create a
    natural language processing for the characters in Homestuck, and to create sort of unofficial "Homestuck 3/1.5" where the 
    natural language processing could create dialogue between the characters and show off the quirks of the dialogue.
    <br/>
    Currently the ngram has been implemented and more are in the works.
    </p>
    </>
  );
}
