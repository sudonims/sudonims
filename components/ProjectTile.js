import {
  Badge,
  Card,
  CardBody,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function ProjectTile({ name, description, badges }) {
  return (
    <Card height={300} maxHeight={300} minHeight={300} key={name}>
      <Stack>
        <CardBody align="left" h={[null, '40vh']}>
          <Heading size="sm">{name}</Heading>

          <Text fontSize="sm" py={2}>
            {description}
          </Text>

          <HStack flexWrap="wrap" pt={4} spacing={2}>
            {badges.map((badge, i) => (
              <Badge my={2} key={i} colorScheme={badge.colorScheme}>
                {badge.text}
              </Badge>
            ))}
          </HStack>
        </CardBody>
      </Stack>
    </Card>
  );
}
