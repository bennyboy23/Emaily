import React, {Component} from 'react';
class Header extends Component {
    render() {
        return (
            <nav className="nav-wrapper">
                <a className="left brand-logo" href="/">
                    Emaily
                </a>
                <ul className="right">
                    <li>
                        <a href="/surveys">
                            dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/auth/google">
                            sign in with google</a>

                    </li>

                </ul>
            </nav>
        );
    }
}

export default Header;