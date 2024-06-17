import "./Modal.css";

export default function Modal({ children }) {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div onClick={handleModalClick} className="modal">
      {children}
    </div>
  );
}