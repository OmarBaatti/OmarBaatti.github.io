function Header() {
    return (
        <header style={{ backgroundColor: '#eee', padding: '1em' }}>
            <h1>My Website</h1>
            <nav>
            <a href="index.html">Home</a> | <a href="about.html">About</a>
            </nav>
        </header>
    );
}
  
function Footer() {
    return (
      <footer style={{ backgroundColor: '#eee', padding: '1em', marginTop: '2em' }}>
        <p>&copy; 2025 My Website</p>
      </footer>
    );
}
  
const headerRoot = document.getElementById('header');
if (headerRoot) {
    ReactDOM.createRoot(headerRoot).render(<Header />);
}
  
const footerRoot = document.getElementById('footer');
if (footerRoot) {
    ReactDOM.createRoot(footerRoot).render(<Footer />);
}