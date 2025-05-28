import styled from 'styled-components';
import { colors } from '../styles/colors';
import { useQuery } from '@tanstack/react-query';

interface CouponData {
  couponId: number;
  cafeId: number;
  cafeName: string;
  cafeAddress: string;
  stampCount: number;
  couponImageUrl: string;
  lastUpdate: string;
}

interface Data {
  result: Array<CouponData>;
}

const Card = styled.div`
  border: 1px ${colors.Gray} solid;
  border-radius: 4px;
`;

const Coupon = () => {
  const searchCouponList = async () => {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`https://cubco.kro.kr/api/v1/coupons/list`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const result: CouponData = await response.json();
    return result;
  };

  const { data: couponData, refetch: couponRefetch } = useQuery({
    queryKey: ['couponList'],
    queryFn: searchCouponList,
  });

  console.log(couponData);
  return (
    <Card
      onClick={() => {
        couponRefetch();
        console.log(couponData);
      }}
    >
      <div>sia</div>
    </Card>
  );
};

export default Coupon;
