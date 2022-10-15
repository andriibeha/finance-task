import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from "../components/Header";


const MainLayout: React.FC = () => {
    const [search, setSearch] = useState<string>('');
    
    return (
        <div className="wrapper">
            <Header search={search} setSearch={setSearch} />
                <Outlet context={{search}} />
            <Footer />
        </div>
    );
};

export default MainLayout;
