import { useLocation } from 'react-router-dom';

import './Test.scss';

export default function Test(){

    const {state} = useLocation();

    return(
        <div className='test-container'>
            <h1 className='test-title'>{state.t.cliente.toUpperCase()}</h1>
            <h2 className='test-subtitle'>Test: Test de usabilidad en el sitio web</h2>
            <h3 className='test-tester'>Testeador 1</h3>
            <div className='iframe-container'>
                <iframe src={state.t.linkVideo} scrolling='no' frameBorder='0' allowFullScreen={true} ></iframe>
            </div>
            <h2 className='test-trans-title'>Transcripción</h2>
            <div className='test-trans-container'>
                {state.t.transcripcion.split('<br>').map((p, i) => 
                    <p className='test-trans-text' key={i}>{p}</p>
                )}
            </div>
            <h2 className='test-task-title'>Tareas</h2>
            <p className='test-task-scenario'>Escenario: {state.t.escenario}</p>
            <div className='test-tasks-container'>
                {state.t.preguntas.map((tarea, i) => 
                    <div className='test-task-container'>
                        <p className='test-task-number'>Tarea {i + 1}:</p>
                        <p className='test-task-text'>{tarea.texto}</p>
                        <p className='test-task-time'>Duración de la tarea: {tarea.tiempo}</p>
                    </div>
                )}
            </div>
        </div>
    )
}