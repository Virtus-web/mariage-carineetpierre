import '../utils/style/form.css'
import { ThemeContext } from '../utils/context'
import { useContext } from 'react'


function ModalForm() {
    
    const { modal, activeModal } = useContext(ThemeContext)


    return (
        <div className={`form-modal ${modal}`}>
            <div className="form-modal-box">
                <h2 className="form-modal-message">Réponse envoyée !</h2>
                <button className="form-modal-close" onClick={() => {
                    window.location.reload()
                    activeModal()
                }}>Ok</button>
            </div>
        </div>
    )
}

export default ModalForm
