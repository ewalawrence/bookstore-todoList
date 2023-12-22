
interface ModalProps {
  modalOpen: boolean
  setModalOpen: (open: boolean) => boolean | void;
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  
  return (
    <dialog id="my_modal_1" className={`modal ${modalOpen ? "modal-open" : ""}`}>
  <div className="modal-box relative">
      {children}
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button onClick={() => setModalOpen(false) } className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  )
}

export default Modal