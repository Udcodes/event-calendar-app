import { iconVariant } from "../../helper";

export const EventFormHeader = ({ selectedEvent, onDelete, onClose }) => {
  return (
    <header className="bg-gray-100 p-4 header">
      <span className="text-xl">
        {!selectedEvent ? "Create" : "Update"} Event
      </span>
      <div>
        {!!selectedEvent && (
          <span
            onClick={onDelete}
            className={`${iconVariant} mr-4 self-baseline hover:text-red-500`}
          >
            delete
          </span>
        )}
        <button onClick={onClose}>
          <span className={`${iconVariant} hover:text-indigo-900 font-bold`}>
            close
          </span>
        </button>
      </div>
    </header>
  );
};
