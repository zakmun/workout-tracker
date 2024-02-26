import React from 'react';
import { Box } from '@mui/material';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';

const HorizontalScrollbar = ({data, BodyParts, setBodyPart}) => {
  return (
    <ScrollMenu>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemid={item.id || item}
                title={item.id || item}
                m="0 40px"
            >
                <BodyPart item={item} BodyPart={BodyPart} setBodyPart={setBodyPart}/>
            </Box>
        )
        )}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar