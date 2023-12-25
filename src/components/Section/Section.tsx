import { ReactElement } from 'react';
import { SectionBox } from './SectionBox.styled';
import { SectionTitle } from './SectionTitle.styled';

interface Props {
  title: string;
  children: ReactElement;
}

export function Section({ title, children }: Props) {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
}
