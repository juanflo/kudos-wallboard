import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const App = () => (
  <Card fluid>
    <div className="kudos">
      <Card.Content>
        <Image
          floated="left"
          src="https://avatars.slack-edge.com/2019-03-28/593216061622_b2e2e2572d29e3eeb66b_192.png"
          size="small"
        />
        <Card.Header>Matt Wong</Card.Header>
        <Card.Meta>From: Juan</Card.Meta>
        <Card.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
          sollicitudin felis, a vehicula eros. Ut vel rutrum mauris, et
          tristique leo. Duis sodales dictum libero, eget eleifend urna tempus
          vel. Integer sit amet ornare augue, a ultricies magna. Ut convallis
          fermentum eros, vitae lacinia lorem laoreet non. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Suspendisse potenti. Nulla sem odio, ultricies vel eros at,
          efficitur pellentesque sapien. Integer ante tortor, vehicula et cursus
          ac, consectetur nec nisl. Nullam vel sem dignissim ex sagittis
          interdum eu a sem. Duis sit amet nibh aliquam, molestie sem sit amet,
          pulvinar turpis. Sed semper arcu non lacinia volutpat. Suspendisse
          auctor, quam sit amet imperdiet pretium, dui dolor mollis urna, vel
          hendrerit eros metus faucibus sem.
        </Card.Description>
      </Card.Content>
    </div>
  </Card>
);

export default App;
