import { SafeAreaView } from "react-native";
import { FlexBox, DimensionScreen, PositionRelative, FlexScreen, FlexDirectionScreen } from "./src/screens"

export default function App() {

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030a13" }}>
      {/* <FlexBox/> */}
      {/* <DimensionScreen/> */}
      {/* <PositionRelative /> */}
      {/* <FlexScreen /> */}
      <FlexDirectionScreen />
    </SafeAreaView>
  );
}