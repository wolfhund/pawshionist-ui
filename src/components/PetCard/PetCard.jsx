import { View, Text } from 'react-native';
import HCard from '../HCard/HCard';

const PetCard = ({ info, photo }) => (
  <HCard>
    <HCard.Header srcImage={photo} />
    <HCard.Body>
      <View className="font-bold text-xl mb-2">
        <Text className="font-bold text-xl">{info.name}</Text>
        <Text className="text-gray-700 text-sm">{info.breed}</Text>
      </View>
      <View className="font-bold text-xl">
        <Text className="font-bold text-base ">Contact</Text>
      </View>
    </HCard.Body>
  </HCard>
);

export default PetCard;
