import { View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { RestaurantItem } from './item';

export interface restaurantProps {
  id: string;
  name: string;
  image: string;
}

export function RestaurantList() {
  const [restaurants, setRestaurants] = useState<restaurantProps[]>([])

  useEffect(() => {
    async function getRestaurants() {
      const response = await fetch('http://192.168.18.3:3000/restaurants');
      const data = await response.json();
      setRestaurants(data);
    }
    getRestaurants();
  }, []);

  return (
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
      {restaurants.map(item => (
        <RestaurantItem item={item} key={item.id}/>
      ))}
    </View>
  );
}
