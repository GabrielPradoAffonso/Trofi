import { View, ScrollView } from 'react-native';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { Search } from '../components/Search';
import Constants from 'expo-constants';
import { Section } from '../components/Section';
import { TrendingFoods } from '../components/Trending';
import { Restaurants } from '../components/Restaurants';
import { RestaurantList } from '../components/restaurantList';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>

      <Section 
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log('Clicou no veja mais')}
        size="text-2xl"
      />
     
      <TrendingFoods />

      <Section 
        name="Famosos no DevFood"
        label="Veja mais"
        action={() => console.log('Clicou no Famosos')}
        size="text-xl"
      />

      <Restaurants />

      <Section 
        name="Restaurantes"
        label="Veja todos"
        action={() => console.log('Clicou no Restaurante')}
        size="text-xl"
      />

      <RestaurantList />
    </ScrollView>
  );
}
