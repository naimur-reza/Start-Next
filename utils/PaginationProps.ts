export default interface PaginationProps {
  activeButton: number;
  setActiveButton: (buttonIndex: number) => void;
  handleButtonClick: (buttonIndex: number) => void;
}
