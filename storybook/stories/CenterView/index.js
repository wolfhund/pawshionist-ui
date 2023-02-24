import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import style from './style';

export default function CenterView({ children, style: customStyles }) {
  const viewStyle = customStyles ? customStyles : style.main;

  return <View style={viewStyle}>{children}</View>;
}

CenterView.defaultProps = {
  children: null
};

CenterView.propTypes = {
  children: PropTypes.node
};
