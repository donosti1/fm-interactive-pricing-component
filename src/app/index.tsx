import React from "react";
import {
  Button,
  Icon,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Switch,
  Text,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import {FaCheck} from "react-icons/fa";

const App: React.FC = () => {
  const [selectedYearly, setSelectedYearly] = React.useState(true);
  const [views, SetViews] = React.useState(100);

  const plans = [
    {
      id: 0,
      title: "basic",
      label: "Basic",
      monthly: "$19.99",
      anually: "$199.99",
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      send: "Send up to 3 GB",
    },
    {
      id: 1,
      title: "professional",
      label: "Professional",
      monthly: "$24.99",
      anually: "$249.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      send: "Send up to 10 GB",
    },
    {
      id: 2,
      title: "master",
      label: "Master",
      monthly: "$39.99",
      anually: "$399.99",
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      send: "Send up to 20 GB",
    },
  ];
  const PlanLabel = (props: any) => {
    return (
      <Text color={props.position == "center" ? "white" : "primary.600"} fontSize="sm">
        {props.children}
      </Text>
    );
  };

  const PlanFeature = (props: any) => {
    return (
      <Text
        borderTop={1}
        borderTopColor="primary.500"
        borderTopStyle="solid"
        color={props.position == "center" ? "white" : "primary.600"}
        fontSize="sm"
        paddingY={3}
      >
        {props.children}
      </Text>
    );
  };
  const PlanFeatureLast = (props: any) => {
    return (
      <Text
        borderBottom={1}
        borderBottomColor="primary.500"
        borderBottomStyle="solid"
        borderTop={1}
        borderTopColor="primary.500"
        borderTopStyle="solid"
        color={props.position == "center" ? "white" : "primary.600"}
        fontSize="sm"
        marginBottom={3}
        paddingY={3}
      >
        {props.children}
      </Text>
    );
  };
  const LearnMoreButton = (props: any) => {
    return (
      <Button
        _hover={{
          bgColor: "transparent",
          bgGradient: "linear(to-r,transparent,transparent)",
          color: props.position != "center" ? "#7674c7" : "white",
          borderColor: props.position != "center" ? "#7674c7" : "white",
          borderWidth: 1,
        }}
        bgColor={props.position == "center" ? "white" : "transparent"}
        bgGradient={
          props.position != "center" ? "linear(to-r,hsl(236, 72%, 79%),hsl(237, 63%, 64%))" : ""
        }
        color={props.position != "center" ? "white" : "#7674c7"}
        fontSize="sm"
        paddingY={3}
      >
        LEARN MORE
      </Button>
    );
  };

  const Card = (props: any) => {
    return (
      <>
        {plans
          .filter((pl: any) => pl.title == props.plan)
          .map((sp) => {
            return (
              <Stack
                key={sp.id}
                backgroundColor="primary.600"
                bgColor={props.position != "center" ? "white" : "transparent"}
                bgGradient={
                  props.position == "center"
                    ? "linear(to-r,hsl(236, 72%, 79%),hsl(237, 63%, 64%))"
                    : ""
                }
                borderLeftRadius={props.position == "right" ? ["xl", 0] : "xl"}
                borderRightRadius={props.position == "left" ? ["xl", 0] : "xl"}
                color={props.position == "center" ? "white" : "primary.700"}
                paddingX={8}
                paddingY={props.position == "center" ? 8 : 4}
                spacing={0}
                width={72}
              >
                <PlanLabel position={props.position}>{sp.label}</PlanLabel>
                <Text fontSize="5xl" paddingY={4}>
                  {selectedYearly ? sp.monthly : sp.anually}
                </Text>
                <PlanFeature position={props.position}>{sp.storage}</PlanFeature>
                <PlanFeature position={props.position}>{sp.users}</PlanFeature>
                <PlanFeatureLast position={props.position}>{sp.send}</PlanFeatureLast>
                <Stack paddingTop={6}>
                  <LearnMoreButton position={props.position} />
                </Stack>
              </Stack>
            );
          })}
      </>
    );
  };

  return (
    <Stack
      backgroundColor="secondary.400"
      backgroundImage={["url('/assets/pattern-circles.svg'),url('/assets/bg-pattern.svg')"]}
      backgroundPosition={["50% 10% , 50% 0%;", "50% 10% , 50% 0%;"]}
      backgroundRepeat="no-repeat, no-repeat"
      flex={1}
      height={["auto", "100vh"]}
      justifyContent="center"
      paddingY={[20, 18]}
    >
      <Stack alignItems="center" alignSelf="center" justifyContent="center" textAlign="center">
        <Stack marginBottom={16}>
          <Text color="secondary.800" fontSize="4xl">
            Simple, traffic-based pricing
          </Text>
          <Text color="secondary.700" fontSize="lg">
            Sign-up for our 30-day trial. No credit card required.
          </Text>
        </Stack>

        <Stack backgroundColor="white" borderRadius="xl" minWidth="container.xs" padding={8}>
          <Stack alignItems="center" direction="row" justifyContent="space-between">
            <Text color="secondary.700" fontSize="sm" fontWeight="800" textTransform="uppercase">
              {views}K Pageviews
            </Text>
            <Stack alignItems="center" direction="row">
              <Text color="secondary.800" fontSize="4xl" fontWeight="800">
                $16.00
              </Text>
              <Text color="secondary.700" fontSize="sm" fontWeight="800">
                {selectedYearly ? "/ year" : "/ month"}
              </Text>
            </Stack>
          </Stack>
          <Slider
            defaultValue={views}
            max={300}
            min={0}
            step={30}
            /* onChangeEnd={(val) => SetViews(val)} */
            onChange={(val) => SetViews(val)}
          >
            <SliderTrack bg="red.100">
              <Stack position="relative" right={10} />
              <SliderFilledTrack bg="primary.500" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
          <SimpleGrid columns={3} spacing={10} templateColumns="120px 1fr 120px">
            <Stack />
            <Stack alignItems="center" direction="row" justifyContent="center">
              <Text color="secondary.700" fontSize="sm">
                Monthly billing
              </Text>
              <Switch
                defaultIsChecked
                colorScheme="blue"
                size="lg"
                onChange={() => setSelectedYearly(!selectedYearly)}
              />
              <Text color="secondary.700" fontSize="sm">
                Yearly billing
              </Text>
            </Stack>
            <Stack />
          </SimpleGrid>
          <Divider paddingTop={8} />
          <Stack direction="row">
            <Stack flex={1}>
              <Stack alignItems="center" direction="row">
                <Icon as={FaCheck} height={6} width={6} />
                <Text fontSize="sm" fontWeight="600">
                  Unlimited websites
                </Text>
              </Stack>
              <Stack alignItems="center" direction="row">
                <Icon as={FaCheck} height={6} width={6} />
                <Text fontSize="sm" fontWeight="600">
                  100% data ownership
                </Text>
              </Stack>
              <Stack alignItems="center" direction="row">
                <Icon as={FaCheck} height={6} width={6} />
                <Text fontSize="sm" fontWeight="600">
                  Email reports
                </Text>
              </Stack>
            </Stack>
            <Stack flex={1} justifyContent="center">
              <Button variant="ghost">Start my trial</Button>
            </Stack>
          </Stack>
          <Stack />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
