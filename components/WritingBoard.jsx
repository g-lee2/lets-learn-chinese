import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Svg, Path } from 'react-native-svg';

const WritingBoard = () => {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [isClearButtonClicked, setIsClearButtonClicked] = useState(false);

  const onTouchEnd = () => {
    setPaths(prevPaths => [...prevPaths, currentPath]);
    setCurrentPath([]);
    setIsClearButtonClicked(false);
  }

  const onTouchMove = (event) => {
    const newPath = [...currentPath];
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;
    const newPoint = `${newPath.length === 0 ? 'M' : ''}${locationX.toFixed(0)},${locationY.toFixed(0)}`;
    newPath.push(newPoint);
    setCurrentPath(newPath);
  }

  const handleClearButtonClick = () => {
    setPaths([]);
    setCurrentPath([]);
    setIsClearButtonClicked(true);
  }

  return (
    <View onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className='w-100% h-1/2 border-black border-2'>
      <Svg>
        <Path 
          d={[...paths.flat(), ...currentPath].join(' ')}
          stroke={isClearButtonClicked ? 'transparent' : 'black'}
          fill="transparent"
          strokeWidth={3}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </Svg>
      <TouchableOpacity onPress={handleClearButtonClick}>
        <Text>
          Clear
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default WritingBoard
