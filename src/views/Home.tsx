import Card from '../components/Card/Card';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <h1 className='home__title'>This page will host my perfect component</h1>
      <Card className='home__card home-card'>
        <Card.Content className='home-card__mini-header'>
          Content of my perfect component
        </Card.Content>
        <Card.Header>
          <h3>Header of the perfect component</h3>
        </Card.Header>
        <Card.Content>
          Content of my perfect component
        </Card.Content>
      </Card>
    </div>
  );
}

export default Home;
