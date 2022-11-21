
import { Link } from "react-router-dom";
import {
  Center,
  VStack,
  Heading,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  ChakraProvider,
} from "@chakra-ui/react";

function MainNavigation() {
  return (
    <ChakraProvider>
      <Center bg="black" color="white" padding={8}>
        <VStack spacing={7}>
          <Tabs variant="soft-rounded" colorScheme="red">
            <Center>
              <TabList>
                <Tab>
                <Link to="/">About Me</Link>
                </Tab>
                <Tab>
                <Link to="/portfolio">Portfolio</Link>
                </Tab>
                <Tab>
                <Link to="/contact">Contact</Link>
                </Tab>
                <Tab>
                <Link to="/resume">Resume</Link>
                </Tab>
              </TabList>
            </Center>
          </Tabs>
        </VStack>
      </Center>
    </ChakraProvider>
  );
}

export default MainNavigation;

