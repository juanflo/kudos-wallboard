import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'semantic-ui-react';

const KudosCard = ({ src, recipients, author, message, reactions }) => (
  <Card fluid>
    <div className="kudos">
      <Card.Content>
        <Image floated="left" src={src} size="small" />
        <Card.Header>
          To:&nbsp;
          {recipients.map(recipient => {
            return recipient.name;
        }).join(', ')}
        </Card.Header>
        <Card.Meta>
          From:&nbsp;
          {author}
        </Card.Meta>
        <Card.Description>{message}</Card.Description>
        {reactions && reactions.length > 0 ?
            <Card.Description>
              {
                <Card.Group className="all-reactions">
                  {reactions.map(reaction => <div className="reaction">{`${reaction.emoji} ${reaction.count}`}</div>)}
                </Card.Group>
              }
            </Card.Description>
            : null}
      </Card.Content>
    </div>
  </Card>
);

KudosCard.propTypes = {
  src: PropTypes.string.isRequired,
  recipients: PropTypes.arrayOf(
      PropTypes.object.isRequired
  ).isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default KudosCard;
