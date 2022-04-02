export default function Header() {
  return (
    <nav >
      <div className="nav-wrapper blue lighten-2 movie__nav">
        <a href="#" className="brand-logo">React</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#">Movies</a></li>
        </ul>
      </div>
    </nav>
  );
}