import {useState, useEffect} from "react";
import YelpService from "../services/yelpService";

export default () => {
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const searchApi = async (searchTerm) => {
    try {
      setErrorMessage(null);
      const response = await YelpService.get("/search", {
        params: {
          limit: 50,
          term:searchTerm,
          location: "san jose",
        },
      });
      setRestaurants(response.data.businesses);
    } catch(err) {
      setErrorMessage("Something wrong");
    }   
  };

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return [searchApi, restaurants, errorMessage];
};