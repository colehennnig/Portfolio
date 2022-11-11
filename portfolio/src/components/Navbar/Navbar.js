import {ReactComponent as Logo} from '../../assets/logo.svg';
import NavButton from './NavButton';

function Navbar(props) {
    return (
        <div className="w-screen h-14 bg-orange-400 flex flex-row items-center p-2 fixed">
            <Logo className='w-auto h-full fill-orange-900 flex-none'/>
            <div className='h-full flex flex-row flex-1 gap-2 content-between'>
                <div className='flex-1'/>
                <NavButton name='Home' path='/'/>
                <NavButton name='About' path='/About'/>
                <NavButton name='Resume' path='/Resume'/>
                <NavButton name='Projects' path='/Projects'/>
            </div>
        </div>
    );
}

export default Navbar;