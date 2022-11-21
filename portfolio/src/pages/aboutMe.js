import {
  VStack,
  IconButton,
  Link,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  useClipboard,
  ChakraProvider,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

function AboutMePage() {
  return (
    <ChakraProvider>
    <VStack spacing={7} paddingTop={5}>
      <Card maxW="sm">
        <CardHeader>
          <Heading size="xl">About Me</Heading>
        </CardHeader>
        <CardBody>
        <Stack mt="6" spacing="3">
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
            <Heading size="md">Morgan Woods Portfolio</Heading>
            <Text>
              This is an API for a social network web application where users
              can share their thoughts.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
      
      </Card>
      
    </VStack>
  </ChakraProvider>
);
}
export default AboutMePage;
