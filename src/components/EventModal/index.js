import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import EventForm from "./EventForm";
import {
  useCreateEvent,
  useUpdateEvent,
  useDeleteEvent,
} from "../../Hooks/useEventFormActions";
import { formObject } from "../../helper";
import { showEventModal, selectedEvent } from "../../redux/actions";

const EventModal = () => {
  const dispatch = useDispatch();
  const { daySelected, selectedEvent: event } = useSelector(
    ({ calendarReducer }) => calendarReducer
  );

  const [formValues, setFormValues] = useState(formObject(event));
  const { createEvent, isSaving } = useCreateEvent();
  const { updateEvent, isUpdating } = useUpdateEvent();
  const { deleteEvent } = useDeleteEvent();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      ...formObject(formValues),
      day: daySelected.valueOf(),
      id: event?.id || Date.now(),
    };

    if (!event) {
      createEvent(calendarEvent);
    } else {
      updateEvent(calendarEvent);
    }
  };

  return (
    <>
      <EventForm
        onChange={handleChange}
        formValues={formValues}
        onClose={() => {
          dispatch(showEventModal(false));
          dispatch(selectedEvent(null));
        }}
        onDelete={() => deleteEvent(event.id)}
        onSubmit={handleSubmit}
        selectedEvent={event}
        daySelected={daySelected}
        updatingEvent={isUpdating}
        savingEvent={isSaving}
      />
    </>
  );
};

export default EventModal;
