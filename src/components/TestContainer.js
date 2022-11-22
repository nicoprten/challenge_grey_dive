import { Link } from "react-router-dom";

import './TestContainer.scss';

export default function TestContainer({ tests }){

    console.log(tests)

    return(
        <div className='test-menu-container'>
            <h2 className='test-menu-title'>Ve los detalles de los tests realizados</h2>
            <ul className='test-menu-list'>
                {tests.map(t =>
                    <li className='test-menu-item' key={t.idVideo}>
                        <Link 
                        className='test-menu-link'
                        to={`test/${t.idVideo}`}
                        state={{t}}
                        >
                        {t.cliente.charAt(0).toUpperCase() + t.cliente.slice(1)}
                    </Link></li>
                )}
            </ul>
        </div>
    )
}