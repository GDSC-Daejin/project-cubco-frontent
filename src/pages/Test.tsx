import { useMutation } from '@tanstack/react-query';

const Test = () => {
  const testFn = async () => {
    const response = await fetch(`https://cubco.kro.kr/api/v1/users/test`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    const result = await response.json();
    return result;
  };

  const { mutate: testMutate, data: testData } = useMutation({
    mutationFn: testFn,
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.accessToken);
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          testMutate();
          console.log(testData);
        }}
      >
        토큰 받기
      </button>
      {testData ? <div>{testData.accessToken}</div> : <>dd</>}
      {/* {isError ? <div>{error.message}</div> : <>dd</>} */}
    </div>
  );
};

export default Test;
