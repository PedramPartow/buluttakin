interface SidebarRoute {
  title: string;
  icon: React.ReactNode;
  path: string;
}

interface ButtonClasses {
  primary: string;
  secoundry: string;
  outlined: string;
}

interface GeneralButton {
  label: string;
  customClass?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  btnClass: keyof ButtonClasses;
  disable?: boolean;
}

interface LoadingProps {
  children: React.ReactNode;
}

interface StepProps {
  step: string;
}

interface DashboardDetails {
  icon: React.ReactNode;
  value: string;
  description: string;
}

interface InputProps {
  label: string;
  errorTxt: string;
  value: string;
  onChange: (value: string) => void;
  onValidation: (value: string) => void;
  placeholder?: string;
  type?: string;
  className?: string;
}

interface radioGroupProps {
  radioGroup: Array<{ id: number; value: string; detail: string }>;
  title: string;
  icon: React.ReactNode;
  setValue?: (value: string) => void;
}

interface OptionDetail {
  label: string;
  value: string;
  img?: string;
}

interface MainSelectProps {
  label: string;
  background?: string;
  width?: string;
  options: Array<OptionDetail>;
  apply?: boolean;
}

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  customClass?: string;
  onClose: () => void;
}

interface SearchInputProps {
  searchField: string;
  setSearchField: (value: string) => void;
}

interface TextInputProps {
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

interface LinkProps {
  sidebarCollapse: boolean;
  title: string;
  icon: React.ReactNode;
  path: string;
  active: boolean;
  setSidebarCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MeetingDetails {
  src: string;
  name: string;
  subject: string;
  date: string;
}

interface revenueCardType {
  title: string;
  value: string;
  percent: string;
}

interface radioGroup {
  id: number;
  detail: string;
  value: string;
}

interface MeetingDateProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  selectedDate: string;
}

interface MeetingCourseProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setSelectedCourse: React.Dispatch<React.SetStateAction<string>>;
  selectedCourse: string;
}

interface MeetingFormProps {
  course: string;
  date: string;
  email: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onClose: () => void;
  setMeetings: React.Dispatch<React.SetStateAction<Array<MeetingDetails>>>;
}

interface MeetingStepsDetail {
  level: string;
  title: string;
  detail: string;
}

interface NewMeetingProps {
  onClose: () => void;
  setMeetings: React.Dispatch<React.SetStateAction<Array<MeetingDetails>>>;
}

interface NewTodoProps {
  onClose: () => void;
  setTodos: React.Dispatch<React.SetStateAction<Array<TodosDetail>>>;
}

interface TodosDetail {
  icon: React.ReactNode;
  title: string;
  description: string;
}
