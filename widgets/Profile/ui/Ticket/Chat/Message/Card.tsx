interface Props {
  text: string;
}

export const Card = ({ text }: Props) => (
  <div className="ticket-chat__chat__message-card">{text}</div>
);
