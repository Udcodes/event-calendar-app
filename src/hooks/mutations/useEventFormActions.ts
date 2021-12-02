import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { IEvent } from "../../interfaces";
import { actionCreators } from "../../state";
import axios from "axios";

const baseUrl = "http://localhost:3006/savedEvents";

export const useCreateEvent = (): any => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { setShowEventModal } = bindActionCreators(actionCreators, dispatch);

  const { mutate: createEvent, isLoading: isSaving } = useMutation(
    (values) => axios.post(baseUrl, values).then(({ data }) => data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("savedEvents");
        setShowEventModal(false);
      },
    }
  );

  return { createEvent, isSaving };
};

export const useUpdateEvent = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { setShowEventModal } = bindActionCreators(actionCreators, dispatch);

  const { mutate: updateEvent, isLoading: isUpdating } = useMutation(
    (values: IEvent) =>
      axios
        .put(`${baseUrl}/${values.id}`, values)
        .then((response) => response.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("savedEvents");
        setShowEventModal(false);
      },
    }
  );

  return { updateEvent, isUpdating };
};

export const useDeleteEvent = (): any => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { setSelectedEvent, setShowEventModal } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { mutate: deleteEvent } = useMutation(
    (id) => axios.delete(`${baseUrl}/${id}`).then(({ data }) => data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("savedEvents");
        setSelectedEvent(null);
        setShowEventModal(false);
      },
    }
  );

  return { deleteEvent };
};
