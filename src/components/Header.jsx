import {ImSpoonKnife} from 'react-icons/im'

const Header = () => {
    return (
        <header className="header">
            <div className='layer'>
                <div className="container">
                    <nav className='logo-wrapper'>
                        <div className='logo'>
                            <ImSpoonKnife className='brand' />
                        </div>
                    </nav>
                    <div className='header-text' >
                        <h1>Recipe App Reactjs</h1>
                        <p>Let &apos s have fun building this app together...</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header