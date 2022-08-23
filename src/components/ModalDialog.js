import React from "react";

function ModalDialog({
  title,
  description,
  open,
  closeContent,
  handleCloseModal,
}) {
  return (
    <>
      {open && (
        <div
          className="modal"
          style={{
            border: "1px solid black",
            borderRadius: "20px",
            backgroundColor: "white",
            padding: ".67rem",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "400px",
          }}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <button onClick={handleCloseModal}>{closeContent}</button>
        </div>
      )}
    </>
  );
}

export default ModalDialog;
