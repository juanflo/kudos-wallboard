import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const KudosCard = ({ src, recipient, author, message }) => (
  <Card fluid>
    <div className="kudos">
      <Card.Content>
        <Image floated="left" src={src} size="small" />
        <Card.Header>{recipient}</Card.Header>
        <Card.Meta>
          From:&nbsp;
          {author}
        </Card.Meta>
        <Card.Description>{message}</Card.Description>
      </Card.Content>
    </div>
  </Card>
);

KudosCard.propTypes = {
  src: PropTypes.string.isRequired,
  recipient: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default KudosCard;
