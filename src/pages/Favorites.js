import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  const meetups = favoritesContext.favorites;
  
  let content;

  if (favoritesContext.totalFavorites === 0) {
    content = <p>No favorites yet, add some!</p>
  } else {
    content = <MeetupList meetups={meetups} />
  }

  return <section>
  <h1>My Favorites</h1>
  {content}
</section>;
}

export default FavoritesPage;
