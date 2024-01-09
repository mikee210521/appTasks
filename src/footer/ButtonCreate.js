import './ButtonCreate.css';
function ButtonCreate({setOpenModal}) {
    return(
        <div className='position'>
            <button
                id='click'
                onClick={()=> {
                    setOpenModal(state => !state);
                }}
            > Agregar
            </button>
        </div>

    );
}
export { ButtonCreate };