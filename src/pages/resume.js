import {
  VStack,
  Link,
  ChakraProvider,
  Image,
  Heading,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'

function ResumePage() {
  return (
    <ChakraProvider>
<VStack spacing={7} paddingTop={5}>
<Heading size='xl' >Morgan's Resume</Heading>
<Image
            src="https://i.imgur.com/GuiErBE.jpeg"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
<Link href='https://docs.google.com/document/d/1cekdX0KYNistluzVeWg_OGJcO9HYIBJuwJYUW8oXByI/edit?usp=sharing' isExternal>
  Link <ExternalLinkIcon mx='2px' />
</Link>
</VStack>
</ChakraProvider>
  );
}
export default ResumePage