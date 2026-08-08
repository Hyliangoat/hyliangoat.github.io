export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer section-shell">
      <div className="system-status">
        <span>SYSTEM STATUS</span>

        <span>
          PORTFOLIO
          <strong>ONLINE</strong>
        </span>

        <span>
          COFFEE
          <strong>CRITICAL</strong>
        </span>

        <span>
          BUGS
          <strong>PROBABLY</strong>
        </span>
      </div>

      <p>© {year} HYLIANGOAT</p>
    </footer>
  );
}