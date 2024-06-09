import ApexChart from 'react-apexcharts';
import usePublic from '../../../Hooks/usePublic';
import { useQuery } from '@tanstack/react-query';

const ChartBoard = () => {

    const publicAPT = usePublic()
    const { data: users = []} = useQuery({
        queryKey: ['/users'],
        queryFn: async () => {
            const res = await publicAPT.get("/users");
            return res.data;

        }
    })

    const series = [
        { name: 'Sales', data: [30, 40, 35, 50, 45, 60] },
      ];
    
      const options = {
        chart: {
          type: 'line',
          animations: {
            enabled: true,
            easing: 'easeinout', 
            speed: 800,
          },
        },
        xaxis: {
          categories: users.length,
        },
      };
    
      return (
        <ApexChart
          series={series}
          options={options}
          type="line"
          height={300}
        />
      );
};

export default ChartBoard;