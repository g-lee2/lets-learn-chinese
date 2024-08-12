import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Svg, Path, Line, Text as SvgText } from 'react-native-svg';

const WritingBoard = ({character}) => {
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
        <Line
          x1="25%"
          y1="0"
          x2="25%"
          y2="100%"
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="5, 5"
          opacity="0.3"
        />
        <Line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="5, 5"
        />
        <Line
          x1="75%"
          y1="0"
          x2="75%"
          y2="100%"
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="5, 5"
          opacity="0.3"
        />
        <Line
          x1="0"
          y1="25%"
          x2="100%"
          y2="25%"
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="5, 5"
          opacity="0.3"
        />
        <Line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="5, 5"
        />
        <Line
          x1="0"
          y1="75%"
          x2="100%"
          y2="75%"
          stroke="gray"
          strokeWidth="2"
          strokeDasharray="5, 5"
          opacity="0.3"
        />
        <Path 
          d={[...paths.flat(), ...currentPath].join(' ')}
          stroke={isClearButtonClicked ? 'transparent' : 'black'}
          fill="transparent"
          strokeWidth={3}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <SvgText
          x="50%"
          y="50%"
          fontSize="130"
          fill="gray"
          textAnchor="middle"
          alignmentBaseline="central"
          opacity="0.3"
        >
          {character}
        </SvgText>
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
