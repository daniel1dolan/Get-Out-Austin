import React from 'react';
import { Grid } from '@material-ui/core';
import PostingsContent from './PostingsContent.component';
import PostingsMap from '../map/PostingsMap.component';
import PostToolBar from './Toolbar.components';

const Postings = (props) => {
  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid
          item
          xs={12}
          sm={8}
          md={7}
          style={{ maxHeight: '100vh', overflow: 'auto' }}
        >
          <PostToolBar />
          <PostingsContent props={props} />
        </Grid>
        <Grid item xs={false} sm={4} md={5} style={{ overflow: 'hidden' }}>
          <PostingsMap />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Postings;
