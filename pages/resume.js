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
        src="https://drive.google.com/file/d/1o2v7OyDkBc5XYZmSRGMcP-im6Ge7guD8/preview"
      />
    </Container>
  );
}
