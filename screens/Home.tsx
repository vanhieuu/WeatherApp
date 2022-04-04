import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { URL } from "../constants/Api";
import { DATA_FAKE, DataResponseProps, fakeData } from "../type/type";
import dayjs from "dayjs";

export default function Home({ navigation }: RootTabScreenProps<"Home">) {
  const iller = [
    "Select a City",
    "HaNoi",
    "Adana",
    "Adiyaman",
    "Afyon",
    "Ağri",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydin",
    "Balikesir",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankiri",
    "Çorum",
    "Denizli",
    "Diyarbakir",
    "Edirne",
    "Elaziğ",
    "Erzincan",
    "Erzurum ",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkari",
    "Hatay",
    "Isparta",
    "Mersin",
    "İstanbul",
    "İzmir",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kirklareli",
    "Kirşehir",
    "Kocaeli",
    "Konya",
    "Kütahya ",
    "Malatya",
    "Manisa",
    "Kahramanmaraş",
    "Mardin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Rize",
    "Sakarya",
    "Samsun",
    "Siirt",
    "Sinop",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon  ",
    "Tunceli",
    "Şanliurfa",
    "Uşak",
    "Van",
    "Yozgat",
    "Zonguldak",
    "Aksaray",
    "Bayburt ",
    "Karaman",
    "Kirikkale",
    "Batman",
    "Şirnak",
    "Bartin",
    "Ardahan",
    "Iğdir",
    "Yalova",
    "Karabük ",
    "Kilis",
    "Osmaniye ",
    "Düzce",
  ];
  const [selectedCity, setSelectedCity] = React.useState("HaNoi");
  const [weather, setWeather] = React.useState<DataResponseProps>(fakeData);

  const onClickHandler = React.useCallback(() => {
    if (selectedCity !== "")
      fetch(URL.selectCity(selectedCity))
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setSelectedCity("");
          console.log(result,'result');
        });
  }, [selectedCity]);

console.log(DATA_FAKE)
  const situationCheck = () => {
    let situation = weather?.weather[0].main;
    return (
      <View>
        <Text>{situation}</Text>
      </View>
    );
  };
  const locationCheck = () => {
    let location = weather?.name.split(" ").slice(0, 1);
    return (
      <Text style={styles.title}>
        {location},{weather.sys.country}
      </Text>
    );
  };
  const tempCheck = () => {
    let temp = Math.round(weather.main.temp);
    let finalText = temp + "°";
    return <Text>{finalText}</Text>;
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginTop: 54,
        }}
      >
        <Text style={styles.dayTimeRender}>
          {dayjs(new Date()).format("DD-MMMM-YYYY")}
        </Text>
        <Text style={styles.title}>{locationCheck()}</Text>
      </View>
      <View>
        <View style={styles.shadowSet}>
          {DATA_FAKE.map((item, index) => {
            console.log(item.icon,'icon')
            item.title === weather.weather[0].description ? (
              <Image
              key={item.icon.toString()}
                source={require('../assets/images/clouds.png')}
                style={{ width: 400, height: 400 }}
                resizeMode="contain"
              />
            ) : null;
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  dayTimeRender: {
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 24,
    color: "#ef8f76",
  },
  shadowSet: {
    shadowOffset: {
      width: 10,
      height: 1,
    },
    elevation: 40,
    shadowColor: "#F9C928",
    shadowOpacity: 10,
    shadowRadius: 20,
  },
});
