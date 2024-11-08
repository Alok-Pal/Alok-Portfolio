// import React from 'react';
// // import ReactWordcloud, { OptionsProp } from 'react-wordcloud';
// import words from '@utils/words';

// const options: OptionsProp = {
//   colors: ['#768EC8', '#EEBBC3', '#c7c7c7'],
//   enableTooltip: false,
//   deterministic: true,
//   fontFamily: 'impact',
//   fontSizes: [40, 100],
//   fontWeight: 'normal',
//   padding: 1,
//   rotations: 2,
//   rotationAngles: [0, 90],
//   scale: 'sqrt',
//   spiral: 'archimedean'
// };

// export default function WordCloud(): JSX.Element {
//   return (
//     <div className="ml-4 sm:mx-12 md:mx-16">
//       <ReactWordcloud options={options} words={words} />
//     </div>
//   );
// }

import React, { useEffect, useRef } from 'react';
import WordCloud from 'wordcloud';

// Example of the words data (ensure this matches your actual data structure)
const words = [
  { text: 'React', size: 100 },
  { text: 'JavaScript', size: 90 },
  { text: 'Next.js', size: 80 },
  { text: 'Node.js', size: 70 },
  { text: 'Frontend', size: 60 },
  { text: 'Backend', size: 50 },
  { text: 'TypeScript', size: 40 },
  { text: 'CSS', size: 30 },
  { text: 'HTML', size: 20 },
  { text: 'API', size: 10 }
];

const WordCloudComponent = () => {
  const wordCloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wordCloudRef.current) {
      // Convert the words array to the format required by wordcloud2: [word, frequency]
      const wordList = words.map((word) => [word.text, word.size]);

      WordCloud(wordCloudRef.current, {
        list: wordList,
        gridSize: 10,
        weightFactor: 10,
        fontFamily: 'impact',
        color: ['#768EC8', '#EEBBC3', '#c7c7c7'],
        rotationAngles: [0, 90],
        fontSizes: [40, 100],
        spiral: 'archimedean',
        padding: 1,
        scale: 'sqrt'
      });
    }
  }, []);

  return (
    <div className="ml-4 sm:mx-12 md:mx-16" ref={wordCloudRef}>
      {/* Word cloud will be rendered here */}
    </div>
  );
};

export default WordCloudComponent;
