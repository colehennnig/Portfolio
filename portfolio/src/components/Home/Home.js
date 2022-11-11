import '../../assets/font.css';
import Type from './Type';
import {DiCode} from 'react-icons/di'

function Home() {
    return (
        <div className="w-screen h-screen bg-orange-100 p-6">
            <div className='w-screen h-14'/>
                <div className='flex flex-row'>
                    <div>
                        <div className='text-red-900' style={{fontFamily: 'SF Mono Bold', fontSize: 80}}>
                            I am Cole Hennig.
                        </div>
                        <div className='text-red-900' style={{fontFamily: 'SF Mono Medium', fontSize: 40}}>
                            <Type/>
                        </div>
                    </div>
                    <DiCode size={200} color={'darkred'}/>
                </div>
        </div>
    );
}

export default Home;