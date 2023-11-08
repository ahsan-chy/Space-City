import React from 'react';

import { Button as AntdButton } from 'antd';

function Button(props) {
  const { children } = props;
  return <AntdButton {...props}>{children}</AntdButton>;
}

export default Button;
