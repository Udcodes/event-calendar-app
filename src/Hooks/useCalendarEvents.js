import { useQuery } from "react-query";
import axios from "axios";
const baseUrl = "http://localhost:3006/savedEvents";

const useCalendarEvents = () => {
  const { data: events, isLoading } = useQuery("savedEvents", () =>
    axios.get(baseUrl).then(({ data }) => data)
  );
  return { events, isLoading };
};

export default useCalendarEvents;
