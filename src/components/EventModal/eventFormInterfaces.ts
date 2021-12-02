import { ChangeEventHandler, FormEventHandler, MouseEventHandler } from "react";
import { IEvent } from "../../interfaces";

export interface IEventFormHeaderProps {
  selectedEvent: IEvent | null;
  onDelete: MouseEventHandler;
  onClose: MouseEventHandler;
}

export interface IEventFormProps {
  onSubmit: FormEventHandler;
  onDelete: () => void;
  onClose: () => void;
  selectedEvent: IEvent | null;
  formValues: IEvent;
  onChange: ChangeEventHandler;
  daySelected: any;
  loadingState: { isSaving: boolean; isUpdating: boolean };
}
