import {Toaster} from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';


import Layout from '@/components/Layout'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoginModal from '@/components/modals/LoginModal';
import RegisterModal from '@/components/modals/RegisterModal';




export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.seession}>
      <Toaster/>
      <RegisterModal/>
     <LoginModal/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}