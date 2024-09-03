import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Svg, Path, Line, Text as SvgText } from 'react-native-svg';

const WritingBoard = ({character, isSmallerDevice}) => {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState([]);
  const [isClearButtonClicked, setIsClearButtonClicked] = useState(false);

  const onTouchEnd = () => {
    if (currentPath.length > 0) {
      setPaths(prevPaths => [...prevPaths, currentPath]);
    }
    setCurrentPath([]);
  }

  const onTouchMove = (event) => {
    setIsClearButtonClicked(false);
    // Create a copy of the current path to avoid mutating state directly
    const newPath = [...currentPath];

    // Get the X and Y coordinates of the touch event
    const locationX = event.nativeEvent.locationX;
    const locationY = event.nativeEvent.locationY;

    // If it's the first point, start the path with 'M' (essentially "moves" the "pen" to a specific position on the canvas. It prepares to start a new drawing from that point). Otherwise, just add the coordinates.
    const newPoint = `${newPath.length === 0 ? 'M' : ''}${locationX.toFixed(0)},${locationY.toFixed(0)}`;

    // Add the new point to the path array
    newPath.push(newPoint);

    // Update the state with the new path, which will trigger a re-render
    setCurrentPath(newPath);
  }

  const handleClearButtonClick = () => {
    setPaths([]);
    setCurrentPath([]);
    setIsClearButtonClicked(true);
  }

  const handleUndoButtonClick = () => {
    setPaths(prevPaths => prevPaths.slice(0, -1));
  }

  return (
    <View className='flex justify-center items-center'>
      <View onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} className={`w-11/12 ${isSmallerDevice ? 'h-56' : 'h-64'} border-2 border-customGreen rounded-2xl`}>
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
            opacity="0.3"
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
            opacity="0.3"
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
          <SvgText
            x="50%"
            y="50%"
            fontSize={character.length > 3 ? '85' : character.length === 3 ? '110' : '150'}
            fill="gray"
            textAnchor="middle"
            alignmentBaseline="central"
            opacity="0.3"
          >
            {character}
          </SvgText>
          <Path 
            // Combine all paths and the current path into a single string that defines the entire SVG path, d attribute expects a string
            d={[...paths.flat(), ...currentPath].join(' ')}
            stroke={isClearButtonClicked ? 'transparent' : 'black'}
            fill="transparent"
            strokeWidth={3}
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </Svg>
      </View>
      <View className='flex-row justify-between items-center m-4 w-11/12'>
        <TouchableOpacity onPress={handleClearButtonClick} className='bg-black w-[47%] h-12 items-center justify-center rounded-lg'>
          <Text className='text-white p-2'>
            Clear
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleUndoButtonClick} className='bg-customGreen w-[47%] h-12 items-center justify-center rounded-lg'>
          <Text className='text-white p-2'>
            Undo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WritingBoard;
