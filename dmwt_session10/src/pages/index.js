import AddFruit from '@/components/AddFruit';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Add a New Fruit</h1>
            <AddFruit onFruitAdded={() => mutate('/api/list-fruits')} />
        </div>
    );
};

export default Home;
