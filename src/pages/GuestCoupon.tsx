import styled from 'styled-components';
import { BaseInput } from '../components/textFields';
import { useForm } from 'react-hook-form';
import { BaseBtn } from '../components/buttons';

const FormBox = styled.div`
  display: flex;
`;

const PhoneNum = styled(BaseInput)``;

const Button = styled(BaseBtn)``;

const GuestCoupon = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form /*  onSubmit={handleSubmit(onSubmit)} */>
        <FormBox>
          <PhoneNum {...register('PhoneNum')} />
          <Button>적립하기</Button>
        </FormBox>
      </form>
    </div>
  );
};

export default GuestCoupon;
