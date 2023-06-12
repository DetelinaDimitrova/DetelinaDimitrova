import { Routes, Route } from 'react-router-dom';
import { Audiences } from './components/Audiences';

const Main = () => {
  return (
    <Routes>
      <Route path='/audiences' element={<Audiences />} />
    </Routes>
  );
}
export default Main;