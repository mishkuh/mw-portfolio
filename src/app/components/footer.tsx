export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {currentYear} Michael Wiens. Built with love.
        </p>
      </div>
    </footer>
  );
}
