interface Props {
  text: string;
  mine?: boolean;
}

export const Card = ({ text, mine }: Props) => (
  <div
    className="ticket-chat__chat__message-card"
    dangerouslySetInnerHTML={!mine ? { __html: text } : undefined}
  >
    {mine ? text : undefined}
  </div>
);
