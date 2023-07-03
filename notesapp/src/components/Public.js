import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Rakshith Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful City In Mangalore, Rakshith Repairs  provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Rakshith R<br />
                    Mangalore<br />
                    Kankanadi, IN<br />
                    <a href="tel:+91 XXXXXXXXX">(+91) XXX-XXX-XXXX</a>
                </address>
                <br />
                <p>Owner: Rakshith Ravindra</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public