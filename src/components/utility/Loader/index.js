import React from 'react';
import LoaderWrapper, { CircularProgress } from './style';

const Loader = ({ classes, collapsed }) => (
  <LoaderWrapper>
    <CircularProgress size={50} />
  </LoaderWrapper>
);
export default Loader;
