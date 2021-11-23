import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { showEventModal, selectedEvent } from "../redux/actions";
import axios from "axios";
const baseUrl = "http://localhost:3006/savedEvents";

export const useCreateEvent = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate: createEvent, isLoading: isSaving } = useMutation(
    (values) => axios.post(baseUrl, values).then(({ data }) => data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("savedEvents");
        dispatch(showEventModal(false));
      },
    }
  );

  return { createEvent, isSaving };
};

export const useUpdateEvent = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate: updateEvent, isLoading: isUpdating } = useMutation(
    (values) =>
      axios
        .put(`${baseUrl}/${values.id}`, values)
        .then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("savedEvents");
        dispatch(showEventModal(false));
      },
    }
  );

  return { updateEvent, isUpdating };
};

export const useDeleteEvent = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { mutate: deleteEvent } = useMutation(
    (id) => axios.delete(`${baseUrl}/${id}`).then(({ data }) => data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("savedEvents");
        dispatch(selectedEvent(null));
        dispatch(showEventModal(false));
      },
    }
  );

  return { deleteEvent };
};
