import { VscTrash } from 'react-icons/vsc';  // Importando o ícone
import './css/ButtonDelete.css';  // Importando o CSS

export default function MyButtonDelete({ onClick }) {
  return (
    <button className='buttonDelete' onClick={onClick}>
      <VscTrash className="trash-icon" />
    </button>
  );
}