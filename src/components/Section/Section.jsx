import PropTypes from 'prop-types';
import { SectionBox } from './SectionBox.styled';
import { SectionTitle } from './SectionTitle.styled';

export function Section({ title, children }) {
  return (
    <SectionBox>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionBox>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};
