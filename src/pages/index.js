import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import styles from "../../styles/rendimiento";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../styles/base";
import Identificador from "./components/Identificador";

const index = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const openRendimiento = () => {
    navigation.navigate("Rendimiento");
  };

  return (
    <View style={{ paddingTop: insets.top + 1 }}>
      <View style={styles.navigationBar}>
        <Text style={styles.headerText}>Taquillas</Text>
      </View>
      <Identificador />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenido: {
    padding: "2%",
    backgroundColor: colors.smokedWhite,
    height: "100%",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  carta: {
    height: 150,
    width: "45%",
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 10,
    borderColor: colors.primary,
  },
});

export default index;
