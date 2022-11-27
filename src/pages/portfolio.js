import {
  VStack,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ChakraProvider,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaVideo, FaExternalLinkAlt } from "react-icons/fa";

function PortfolioPage() {
  return (
    <ChakraProvider>
      <VStack spacing={7} paddingTop={5}
      backgroundImage='https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80'
>
        <Card maxW="xl">
          <CardHeader>
            <Heading size="xl">Portfolio</Heading>
          </CardHeader>
          <Card maxW="xl">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Image
                  src="https://i.imgur.com/jFesSFJ.jpeg"
                  alt="A screenshot of the web app deployed"
                  borderRadius="lg"
                />
                <Heading size="md">Group Me Web App</Heading>
                <Text>
                  A group project build using MERN stack with a React front end,
                  MongoDB database, and Node.js/Express.js server and API.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <IconButton
                  as="a"
                  href="https://github.com/MorganWoods618/employee-tracker-hm"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="https://drive.google.com/file/d/18JXUIhhOaa7eJcp590GuRv8g5-Vr1S5i/view"
                  aria-label="Recording"
                  icon={<FaExternalLinkAlt fontSize="1.25rem" />}
                />
              </ButtonGroup>
            </CardFooter>
          </Card>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/jFesSFJ.jpeg"
                alt="A screenshot of the API working in Insomnia"
                borderRadius="lg"
              />
              <Heading size="md">Social Network API with NoSQL</Heading>
              <Text>
                This is an API for a social network web application where users
                can share their thoughts.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/homeworkwk18"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1jt61tg9LatqMh83DRk1afFLhNBakEJVX/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/ARbloLE.jpeg"
                alt="A screenshot of the tracker working in Insomnia"
                borderRadius="lg"
              />
              <Heading size="md">Employee Tracker with MySQL</Heading>
              <Text>
                A command-line application from scratch to manage a company's
                employee database, using Node.js, Inquirer, and MySQL.{" "}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/employee-tracker-hm"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/18JXUIhhOaa7eJcp590GuRv8g5-Vr1S5i/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/WBSlcYj.jpeg"
                alt="A screenshot of the generator"
                borderRadius="lg"
              />
              <Heading size="md">Team Profile Generator</Heading>
              <Text>
                a Node.js command-line application that takes in information
                about employees on a software engineering team, then generates
                an HTML webpage that displays summaries for each person.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/fictional-octo-spoon"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1N_8LP-qJyxd5deuj991_5ij4idzEWPAP/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card minW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/oaJIWHn.jpeg"
                alt="A screenshot of the planner"
                borderRadius="lg"
              />
              <Heading size="md">Daily Planner</Heading>
              <Text>
                A daily planner made using Javascript, JQuery, and CSS.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/AwesomePlannerHomework"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://morganwoods618.github.io/AwesomePlannerHomework/"
                aria-label="Recording"
                icon={<FaExternalLinkAlt fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/5BlKUyi.jpeg"
                alt="ReadME generator photo"
                borderRadius="lg"
              />
              <Heading size="md">README Generator</Heading>
              <Text>
                A command-line application that dynamically generates a
                professional README.md file from a user's input using the
                Inquirer package.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/scaling-doodle"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1ohsBxHvJxYDkB33HApoKaQ-IWacu1PO4/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>
      </VStack>
    </ChakraProvider>
  );
}

export default PortfolioPage;
