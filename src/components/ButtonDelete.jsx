import { VscTrash } from 'react-icons/vsc';  
import './css/ButtonDelete.css';  

export default function MyButtonDelete({ onClick }) {
  return (
    <button className='buttonDelete' onClick={onClick}>
      <VscTrash className="trash-icon" />
    </button>
  );
}