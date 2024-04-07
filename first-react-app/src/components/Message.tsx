import MessageProps from "../types/MessageProps";

export default function Message(props: MessageProps) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice
    </p>
  );
}
