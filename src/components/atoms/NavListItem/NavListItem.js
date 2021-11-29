import { useRef } from 'react';
import { ListItem, Icon, Counter, Text } from './NavListItem.styles';
import openIssue from '../../../assets/icons/icon-open-issue.svg';
import closedIssue from '../../../assets/icons/icon-closed-issue.svg';
import github from '../../../assets/icons/icon-github.svg';

function NavListItem({ text, icon, counter }) {
  let ref = useRef();

  const iconPath = () => {
    switch (icon) {
      case 'github':
        return github;
      case 'open-issue':
        return openIssue;
      case 'closed-issue':
        return closedIssue;
      default:
        console.log('No image');
    }
  };

  const onSelectLink = () => {
    let linksArr = document.querySelectorAll('.sc-jRQBWg');
    linksArr.forEach((link) => {
      link.removeAttribute('selected');
    });

    if (ref.current) {
      ref.current.setAttribute('selected', '');
    }
  };
  return (
    <ListItem ref={ref} onClick={onSelectLink}>
      <Icon>
        <img src={iconPath()} alt="Icon" />
      </Icon>
      <Text>{text}</Text>
      <Counter>{counter}</Counter>
    </ListItem>
  );
}

export default NavListItem;
