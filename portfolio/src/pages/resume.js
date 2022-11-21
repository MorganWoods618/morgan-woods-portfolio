import {
  VStack,
  Link,
  ChakraProvider,
  Image,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

function ResumePage() {
  return (
    <ChakraProvider>
<VStack spacing={7} paddingTop={5}>
<Heading size='xl' >Morgan's Resume</Heading>
<Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
<Link href='https://chakra-ui.com' isExternal>
  Download Link <ExternalLinkIcon mx='2px' />
</Link>
</VStack>
</ChakraProvider>
  );
}
export default ResumePage