import { GoogleReCaptchaProvider } from '@/components/GoogleReCaptchaProvider';
import { Galada, Poppins, Raleway } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from '@/ThemeProvider';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import '@/stylesheets/globals.css';

export const metadata: Metadata = {
  title: 'Corte de Gringo',
  description:
    'Corte de Gringo oferece cortes de cabelo tradicionais e atendimento personalizado em um ambiente acolhedor. Venha conhecer nossos profissionais qualificados e saia com um corte que combina estilo e elegância.',
};

const poppins = Poppins({
  subsets: ['latin'],
  fallback: ['system-ui'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const raleway = Raleway({
  subsets: ['latin'],
  fallback: ['system-ui'],
  variable: '--font-raleway',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const galada = Galada({
  weight: ['400'],
  subsets: ['latin'],
  fallback: ['system-ui'],
  variable: '--font-galada',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = `${GeistSans.className} ${GeistSans.variable} ${poppins.variable} ${raleway.variable} ${galada.variable}`;

  return (
    <html lang='pt-BR'>
      <body className={`${fonts} flex flex-col`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <GoogleReCaptchaProvider>{children}</GoogleReCaptchaProvider>
          <Toaster richColors position='bottom-right' />
        </ThemeProvider>
      </body>
    </html>
  );
}
