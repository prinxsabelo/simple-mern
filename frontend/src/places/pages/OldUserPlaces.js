import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';
const DUMMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scapers in the world..',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484,
      lng: -73.9857,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empxxx',
    description: 'One of the most famous sky scapers in the world..',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/250px-Empire_State_Building_%28aerial_view%29.jpg',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484,
      lng: -73.9857,
    },
    creator: 'u2',
  },
];
const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMMY_PLACES.filter(
    (place) => place.creator === userId
  );
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
