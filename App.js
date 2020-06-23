import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SearchScreen from "./src/pages/SearchScreen";
import RestaurantsShowScreen from "./src/pages/RestaurantsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    RestaurantsShow: RestaurantsShowScreen,
  },
  {
    initalRouteName: "Search",
    defaultNavigationOptions: {
      title: "Descobrir restaurantes",
      cardStyle: { backgroundColor: "#FFFFFF" },
    },
  }
);

export default createAppContainer(navigator);
