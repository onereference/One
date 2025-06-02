
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/layout/navbar';
import { AuthProvider } from '@/contexts/auth-context';
import { PageFooter } from '@/components/layout/page-footer'; // Import the new footer

export const metadata: Metadata = {
  title: 'OneReference',
  description: 'Your one-stop job reference platform.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col bg-background"> {/* Ensure body bg for consistency */}
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark" // Set default to dark as per new landing page design
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="flex-grow"> {/* Removed container and padding to allow full-width sections */}
              {children}
            </main>
            <PageFooter /> {/* Add the new PageFooter here */}
            <Toaster />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
