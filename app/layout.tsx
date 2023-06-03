import './globals.css'

export const metadata = {
  title: 'PQX Dummy Mockup 1',
  description: 'created by PQX Global',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
