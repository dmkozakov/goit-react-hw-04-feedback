interface Props {
  message: string;
}

export function Notification({ message }: Props) {
  return <p>{message}</p>;
}
