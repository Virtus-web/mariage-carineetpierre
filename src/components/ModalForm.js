import '../utils/style/form.css'
import { ThemeContext } from '../utils/context'
import { useContext } from 'react'


function ModalForm() {
    
    const { modalForm, activeModalForm } = useContext(ThemeContext)

    return (
        <div className={`form-modal ${modalForm}`}>
            <div className="form-modal-box">
                <h2 className="form-modal-message">Réponse envoyée !</h2>
                <button className="form-modal-close" onClick={() => {
                    window.location.reload()
                    activeModalForm()
                }}>Ok</button>
            </div>
        </div>
    )
}

export default ModalForm
