import { useQuery } from "react-query";
import axios from "axios";
import { IEvent } from "../../interfaces";
const baseUrl = "http://localhost:3006/savedEvents";

interface ICalendarEvents {
  events: IEvent[];
  isLoading: boolean;
}

const useCalendarEvents = (): ICalendarEvents => {
  const { data: events, isLoading } = useQuery("savedEvents", () =>
    axios.get(baseUrl).then(({ data }) => data)
  );
  return { events, isLoading };
};

export default useCalendarEvents;
