import {
  VStack,
  Card,
  CardHeader,
  CardBody,
  ChakraProvider,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

function AboutMePage() {
  return (
    <ChakraProvider>
    <VStack spacing={7} paddingTop={5}
            backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80"
            backgroundPosition="center"
            backgroundRepeat="no-repeat">
      
      <Card maxW="sm" backgroundColor='white'>
        <CardHeader>
          <Heading size="xl">About Me!</Heading>
        </CardHeader>
        <CardBody>
        <Stack mt="6" spacing="3">
          <Image
            src="https://i.imgur.com/Jn24JKy.jpeg"
            alt="Photo of Morgan Woods"
            borderRadius="3xl"
          />
            <Heading size="md">Morgan Woods Portfolio</Heading>
            <Text>
       I am a student at the University of Utah Full Stack Web Development course, about to graduate. I am currenly looking for a job in the field. In my free time I love to travel and play video games!        
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
