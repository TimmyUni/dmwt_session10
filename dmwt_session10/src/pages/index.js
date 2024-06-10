import AddFruit from '@/components/AddFruit';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
      <div>
        <Navbar />
        <h1>Add a New Fruit</h1>
        <AddFruit />
      </div>
    );
  };
  
  export default Home;
  