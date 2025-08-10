const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return <p className="text-center text-gray-500">No Notes yet</p>;
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => {
        let borderColor = 'border-neutral-950';
        if (note.priority === '🟢 Low') {
          borderColor = 'border-green-500';
        } else if (note.priority === '🟠 Medium') {
          borderColor = 'border-orange-500';
        } else if (note.priority === '🔴 High') {
          borderColor = 'border-red-500';
        }

        return (
          <div key={note.id} className={`p-4 bg-white rounded-lg shadow-md border-l-4 ${borderColor}`}>
            <h3 className="text-lg font-bold">{note.title}</h3>
            <p className="text-sm text-gray-600">
              <strong>Category: </strong> {note.category}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Priority: </strong> {note.priority}
            </p>
            <p className="mt-2">{note.description}</p>
            <button
              onClick={() => deleteNote(note.id)}
              className="mt-3 text-red-500 cursor-pointer transition hover:text-red-700"
            >
              🗑️ Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default NoteList;
