import { Routes, Route } from 'react-router-dom';
import { Audiences } from './components/Audiences';

const Main = () => {
  return (
    <Routes>
      <Route path='/' element={<Audiences />} />
    </Routes>
  );
}
export default Main;