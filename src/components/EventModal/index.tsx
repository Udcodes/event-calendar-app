import React, { useState, SyntheticEvent, FC, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import EventForm from "./EventForm";
import {
  useCreateEvent,
  useUpdateEvent,
  useDeleteEvent,
} from "../../hooks/mutations/useEventFormActions";
import { formObject } from "../../helper";
import { IEvent } from "../../interfaces";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../state";

const EventModal: FC = () => {
  const dispatch = useDispatch();
  const { setShowEventModal, setSelectedEvent } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const { daySelected, calendarEvent } = useSelector(
    ({ calender }: State) => calender
  );

  const [formValues, setFormValues] = useState<IEvent>(
    formObject(calendarEvent)
  );
  const { createEvent, isSaving } = useCreateEvent();
  const { updateEvent, isUpdating } = useUpdateEvent();
  const { deleteEvent } = useDeleteEvent();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    const calendarEventFormValues = {
      ...formObject(formValues),
      day: daySelected?.valueOf(),
      id: calendarEvent?.id || Date.now(),
    };

    if (!calendarEvent) {
      createEvent(calendarEventFormValues);
    } else {
      updateEvent(calendarEventFormValues);
    }
  };

  return (
    <>
      <EventForm
        onChange={handleChange}
        formValues={formValues}
        onClose={() => {
          setShowEventModal(false);
          setSelectedEvent(null);
        }}
        onDelete={() => deleteEvent(calendarEvent?.id)}
        onSubmit={handleSubmit}
        selectedEvent={calendarEvent}
        daySelected={daySelected}
        loadingState={{ isSaving, isUpdating }}
      />
    </>
  );
};

export default EventModal;
