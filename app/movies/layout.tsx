import Navigation from '../ui/navigation';

export default function MoviesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <aside className="body-aside">
        <Navigation />
      </aside>
      <main>{children}</main>
    </>
  );
}
