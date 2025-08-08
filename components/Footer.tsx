export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="glass px-6 py-6 text-sm text-white/70">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Prime Analytics. Все права защищены.
            </p>
            <p>Сделано с ♥ и вниманием к конверсии.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
