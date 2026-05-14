import { useState } from "react";

const CreateRoomModal = ({ onCreate, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    description: ""
  });

  const submit = (e) => {
    e.preventDefault();

    if (!form.name.trim()) return;

    onCreate(form);
    onClose();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "grid",
        placeItems: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#111827",
          padding: "24px",
          borderRadius: "12px"
        }}
      >
        <h2>Create Room</h2>

        <form onSubmit={submit}>
          <input
            placeholder="Room name"
            value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
          />

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value
              })
            }
          />

          <div style={{ marginTop: "16px" }}>
            <button type="submit">Create</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateRoomModal;