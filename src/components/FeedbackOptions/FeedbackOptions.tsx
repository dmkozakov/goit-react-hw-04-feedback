import { FeedbackBox } from './FeedbackOptions.styled';
import { FeedbackOptionBtn } from './FeedbackOptionBtn.styled';
import { MouseEvent } from 'react';

interface Props {
  options: string[];
  onLeaveFeedback: (key: string) => void;
}

export function FeedbackOptions({ options, onLeaveFeedback }: Props) {
  return (
    <FeedbackBox>
      {options.map(option => (
        <FeedbackOptionBtn
          key={option}
          type="button"
          name={option}
          onClick={(e: MouseEvent<HTMLButtonElement>) =>
            onLeaveFeedback((e.target as HTMLButtonElement).name)
          }
        >
          {option[0].toUpperCase().concat(option.slice(1))}
        </FeedbackOptionBtn>
      ))}
    </FeedbackBox>
  );
}
