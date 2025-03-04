import { Container } from '@chakra-ui/react';

export default function Resume() {
  return (
    <Container
      display={'flex'}
      flexDirection={'row'}
      justifyContent={'center'}
      alignContent={'center'}
      minWidth={'100vw'}
    >
      <iframe
        style={{
          width: '40vw',
          height: '100vh',
        }}
        src="https://drive.google.com/file/d/1SoL9xWTVh7WAq7IU0MbTxPh2RhYwkzz-/preview"
      />
    </Container>
  );
}
