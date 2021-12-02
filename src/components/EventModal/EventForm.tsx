import { EventFormHeader } from "./EventFormHeader";
import { IEventFormProps } from "./eventFormInterfaces";
import "./styles.scss";

const EventForm = (props: IEventFormProps) => {
  const {
    onSubmit,
    onDelete,
    onClose,
    selectedEvent,
    formValues,
    onChange,
    daySelected,
    loadingState,
  } = props;

  const { title, startTime, endTime } = formValues;
  const { isSaving, isUpdating } = loadingState;

  const btnAction = (): string => {
    if (!selectedEvent) return !isSaving ? "Save" : "Saving";
    return !isUpdating ? "Update" : "Updating";
  };

  return (
    <div className="modal">
      <form className="bg-white shadow-2xl w-1.5/4" onSubmit={onSubmit}>
        <EventFormHeader
          selectedEvent={selectedEvent}
          onClose={onClose}
          onDelete={onDelete}
        />
        <div className="p-4">
          <p className="text-md">{daySelected.format("dddd, MMMM DD")}</p>
          <input
            minLength={5}
            maxLength={30}
            type="text"
            name="title"
            placeholder="Add a title"
            value={title}
            required
            className="text-input border-0 border-gray-600 focus:ring-0 focus:border-blue-500"
            onChange={onChange}
          />
          <div className="date">
            <p className="mr-1 date input ">Start time:</p>
            <input
              type="time"
              name="startTime"
              value={startTime}
              required
              onChange={onChange}
            />
            <p className="mx-4">-</p>
            <p className="mr-1 date input">End time:</p>
            <input
              type="time"
              name="endTime"
              value={endTime}
              required
              onChange={onChange}
            />
          </div>
        </div>
        <footer className="footer">
          <button type="submit" className="footer btn">
            {loadingState && btnAction()}
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventForm;
