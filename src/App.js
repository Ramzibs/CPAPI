import { getList} from './Redux/Action';
import './App.css';
import List from './component/CustumList'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import CutumModal from './component/CutumModal'

function App() {
  const dispatch = useDispatch()
  const listCard = async () => {
    try {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
      dispatch(getList(data))
    }
    catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    listCard()
  },[])

  return (
    <div className="App">
      <List />
      <CutumModal />

    </div>
  );
}

export default App;
