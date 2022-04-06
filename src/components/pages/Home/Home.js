import Tables from '../../features/Tables/Tables';
import { useSelector } from 'react-redux';
import { getAllTables } from '../../../redux/tablesRedux';

const Home = () => {

  const tables = useSelector(getAllTables);

  return (
    <>
      <h1>All tables</h1>
      <Tables tables={tables}/>
    </>
  );
}

export default Home;
