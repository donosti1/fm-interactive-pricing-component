import React from "react";
import {
  Button,
  Image,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Switch,
  Tag,
  Text,
  SimpleGrid,
  Divider,
  TagLabel,
} from "@chakra-ui/react";
import {FaCheck} from "react-icons/fa";

const App: React.FC = () => {
  const [selectedYearly, setSelectedYearly] = React.useState(false);
  const [views, SetViews] = React.useState(100);
  const price =
    views != 0 ? (selectedYearly ? Math.floor(views / 6) * 12 * 0.75 : Math.floor(views / 6)) : 1;
  const features = [
    {
      id: 0,
      label: "Unlimited websites",
    },
    {
      id: 1,
      label: "100% data ownership",
    },
    {
      id: 2,
      label: "Email reports",
    },
  ];

  return (
    <Stack
      backgroundColor="secondary.400"
      backgroundImage={["url('/assets/pattern-circles.svg'),url('/assets/bg-pattern.svg')"]}
      backgroundPosition={["50% 10%, 0% -20%;", "50% 10%, 50% 0%;"]}
      backgroundRepeat="no-repeat, no-repeat"
      backgroundSize={["auto, auto", "auto, contain"]}
      flex={1}
      height={["auto", "100vh"]}
      justifyContent="center"
      paddingTop={[20, 18]}
      role="main"
    >
      <Stack alignItems="center" alignSelf="center" justifyContent="center" textAlign="center">
        <Stack marginBottom={[8, 16]}>
          <Text as="h1" color="secondary.800" fontSize={["xl", "4xl"]} fontWeight="800">
            Simple, traffic-based pricing
          </Text>
          <Text color="secondary.700" fontSize={["md", "lg"]}>
            Sign-up for our 30-day trial. <Divider borderWidth={0} display={["block", "none"]} />
            No credit card required.
          </Text>
        </Stack>

        <Stack
          backgroundColor="white"
          borderRadius="xl"
          boxShadow="4px 4px 12px 0px rgba(0,0,0,0.1)"
          width={["auto", "container.sm"]}
        >
          <Stack padding={[4, 8]}>
            <Stack
              alignItems="center"
              direction={["column", "row"]}
              justifyContent="space-between"
              paddingBottom={[4, 0]}
            >
              <Text color="secondary.700" fontSize="sm" fontWeight="800" textTransform="uppercase">
                {views}K Pageviews
              </Text>
              <Stack alignItems="center" direction="row" display={["none", "flex"]}>
                <Text color="secondary.800" fontSize={["2xl", "4xl"]} fontWeight="800">
                  $
                  {price.toLocaleString("es-AR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
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
              onChange={(val: number) => SetViews(val)}
            >
              <SliderTrack bg="secondary.500" borderRadius="lg" height={3}>
                <Stack position="relative" right={10} />
                <SliderFilledTrack bg="primary.400" />
              </SliderTrack>
              <SliderThumb
                _focus={{bg: "#22aea1", boxShadow: "0px 10px 22px 2px rgba(37,200,181,.8)"}}
                backgroundColor="primary.500"
                borderColor="#25c8b5"
                borderWidth={2}
                boxShadow={"0px 10px 22px 2px rgba(37,200,181,.8)"}
                boxSize={10}
              >
                <Image alt="slider icon" src="/assets/icon-slider.svg" />
              </SliderThumb>
            </Slider>
            <Stack
              alignItems="center"
              direction="row"
              display={["flex", "none"]}
              justifyContent="center"
              paddingTop={4}
            >
              <Text color="secondary.800" fontSize={["2xl", "4xl"]} fontWeight="800">
                $
                {price.toLocaleString("es-AR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </Text>
              <Text color="secondary.700" fontSize="sm" fontWeight="800">
                {selectedYearly ? "/ year" : "/ month"}
              </Text>
            </Stack>
            <SimpleGrid
              columns={3}
              paddingTop={[4, 8]}
              spacing={[2, 0]}
              templateColumns={["1fr 18fr 1fr", "150px 1fr 150px"]}
            >
              <Stack />
              <Stack alignItems="center" direction="row" justifyContent="center">
                <Text color="secondary.700" fontSize={["xs", "sm"]}>
                  Monthly billing
                </Text>
                <Switch
                  colorScheme="toggle"
                  display={["block", "none"]}
                  size="md"
                  onChange={() => setSelectedYearly(!selectedYearly)}
                />
                <Switch
                  colorScheme="toggle"
                  display={["none", "block"]}
                  size="lg"
                  onChange={() => setSelectedYearly(!selectedYearly)}
                />
                <Text color="secondary.700" fontSize={["xs", "sm"]}>
                  Yearly billing
                </Text>
              </Stack>
              <Stack alignItems="flex-start" justifyContent="center">
                <Tag backgroundColor="primary.600" size="md">
                  <TagLabel color="primary.700" fontSize="xs">
                    <Text display={["none", "block"]}>25% discount</Text>
                    <Text display={["block", "none"]}>-25%</Text>
                  </TagLabel>
                </Tag>
              </Stack>
            </SimpleGrid>
          </Stack>
          <Divider borderWidth={1} marginTop={8} />

          <Stack direction={["column", "row"]} padding={[4, 8]} spacing={[8, 0]}>
            <Stack flex={1}>
              {features.map((item) => (
                <Stack
                  key={item.id}
                  alignItems="center"
                  direction="row"
                  justifyContent={["center", "flex-start"]}
                  spacing={4}
                >
                  <Image alt="Check" height={3} src="/assets/icon-check.svg" width={3} />
                  <Text color="secondary.700" fontSize={["xs", "sm"]} fontWeight="600">
                    {item.label}
                  </Text>
                </Stack>
              ))}
            </Stack>
            <Stack flex={1} justifyContent="center">
              <Button alignSelf="center" height={12} paddingX={14} variant="ghost">
                Start my trial
              </Button>
            </Stack>
          </Stack>
          <Stack />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default App;
