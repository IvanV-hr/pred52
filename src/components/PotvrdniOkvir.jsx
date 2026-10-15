const PotvrdniOkvir = ({ oznaka, ukljucen, onPromjena }) => {
  return (
    <label>
      <input
        type="checkbox"
        checked={ukljucen}
        onChange={(e) => onPromjena(e.target.checked)}
      />
      {oznaka}
    </label>
  );
};

export default PotvrdniOkvir;
