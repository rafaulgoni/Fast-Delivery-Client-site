import { Outlet } from 'react-router-dom';
import SiteBar from '../Shared/SiteBar';

const DashboardLayOut = () => {
    return (
        <div className='container mx-auto'>
            <div className='relative min-h-screen md:flex'>
                <SiteBar />
                <div className='flex-1 md:ml-10'>
                    <div className='p-5'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayOut;