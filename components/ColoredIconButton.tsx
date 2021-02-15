import { SvgIconTypeMap } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import React from 'react'

const ColoredIconButton = ({
  label,
  onBgColor,
  offBgColor,
  isOn,
  Icon,
  handler,
}: {
  label: string;
  onBgColor: string;
  offBgColor: string;
  isOn: boolean;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  handler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <IconButton aria-label={label} onMouseDown={handler}>
      {isOn ? (
        <Icon style={{ backgroundColor: onBgColor }} />
      ) : (
        <Icon style={{ backgroundColor: offBgColor }} />
      )}
    </IconButton>
  );
};

export default ColoredIconButton
