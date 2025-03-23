import { Geist, Geist_Mono } from "next/font/google";
import "./styles/index.scss";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "קורס רשלנות רפואית - עו״ד נחמי וולק",
   description: "קורס מקצועי לעורכי דין בתחום תביעות רשלנות רפואית",
   applicationName: "קורס רשלנות רפואית",
   manifest: '/manifest.json',
   icons: {
      icon: [
         { url: '/favicon.ico', sizes: 'any' },
         { url: '/icon.svg', type: 'image/svg+xml' },
         { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
         { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
         { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      ],
      apple: [
         { url: '/icons/apple/apple-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
         {
            rel: 'mask-icon',
            url: '/safari-pinned-tab.svg',
            color: '#2c3e50'
         },
         {
            rel: 'android-chrome-192x192',
            url: '/icons/android/web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png'
         },
         {
            rel: 'android-chrome-512x512',
            url: '/icons/android/web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png'
         },
      ],
   },
   appleWebApp: {
      title: "קורס רשלנות רפואית",
      statusBarStyle: "default",
      startupImage: [
         '/icons/apple/apple-icon.png'
      ]
   },
};

export default function RootLayout({ children }) {
   return (
      <html lang="he" dir="rtl">
         <body
            className={`${geistSans.variable} ${geistMono.variable}`}
            suppressHydrationWarning
         >
            {children}
         </body>
      </html>
   );
}
