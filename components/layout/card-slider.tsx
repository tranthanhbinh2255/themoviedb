import { Slide } from 'pure-react-carousel'
import React from 'react'
import { Card } from 'semantic-ui-react'

const CardSlider: React.FC<any> = ({ index, ...cardProps }) => (
  <Slide index={index}>
    <div style={{ padding: 10 }}>
      <Card  {...cardProps} />
    </div>
  </Slide>
)

// CustomCardSlide.propTypes = {
//   index: PropTypes.number.isRequired
// };

export default CardSlider
