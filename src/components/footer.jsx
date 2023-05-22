function Footer() {
    return <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} YanaVved
                <a className="grey-text text-lighten-4 right" href="https://github.com/comatos4/Basket.git">Repository</a>
            </div>
        </div>   
    </footer>
}
export { Footer };