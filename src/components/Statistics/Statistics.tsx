import { StatisticsBox } from './StatisticsBox.styled';

interface Props {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

export function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: Props) {
  return (
    <StatisticsBox>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage || 0}%</p>
    </StatisticsBox>
  );
}
