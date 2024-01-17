import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
import { useSelector } from 'react-redux';
import Box from '../../../../components/ui/box';
import SiteIcon from '../../../../components/ui/site-icon';
import Typography from '../../../../components/ui/typography/typography';
import {
  TypographyVariant,
  FONT_WEIGHT,
  DISPLAY,
=======
import {
  AvatarNetwork,
  AvatarNetworkSize,
  Box,
  Text,
} from '../../../../components/component-library';
import {
  Display,
>>>>>>> circle-retry
  JustifyContent,
  BLOCK_SIZES,
  AlignItems,
<<<<<<< HEAD
  TEXT_ALIGN,
  TextColor,
=======
>>>>>>> circle-retry
} from '../../../../helpers/constants/design-system';
import {
  CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP,
  NETWORK_TO_NAME_MAP,
} from '../../../../../shared/constants/network';

export default function ConfirmationNetworkSwitch({ newNetwork }) {
  const currentNetwork = useSelector((state) => ({
    nickname: state.metamask.provider.nickname,
    type: state.metamask.provider.type,
    chainId: state.metamask.provider.chainId,
  }));

  return (
    <Box
      className="confirmation-network-switch"
      display={DISPLAY.FLEX}
      height={BLOCK_SIZES.FULL}
      justifyContent={JustifyContent.center}
      marginTop={8}
    >
      <Box
        className="confirmation-network-switch__icon"
        display={DISPLAY.BLOCK}
      >
<<<<<<< HEAD
        {currentNetwork.chainId in CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP ? (
          <SiteIcon
            icon={CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[currentNetwork.chainId]}
            name={currentNetwork.nickname}
            size={64}
          />
        ) : (
          <div className="confirmation-network-switch__unknown-icon">
            <i className="fa fa-question fa-2x" />
          </div>
        )}
        <Typography
          color={TextColor.textDefault}
          variant={TypographyVariant.H6}
          fontWeight={FONT_WEIGHT.NORMAL}
          align={TEXT_ALIGN.CENTER}
          boxProps={{
            display: DISPLAY.FLEX,
            justifyContent: JustifyContent.center,
          }}
        >
          {currentNetwork.nickname || NETWORK_TO_NAME_MAP[currentNetwork.type]}
        </Typography>
=======
        <AvatarNetwork
          src={fromNetworkDetails.iconUrl}
          name={fromNetworkDetails.nickname}
          size={AvatarNetworkSize.Xl}
          marginBottom={2}
        />
        <Text display={Display.Flex} justifyContent={JustifyContent.center}>
          {fromNetworkDetails.nickname}
        </Text>
>>>>>>> circle-retry
      </Box>
      <Box
        className="confirmation-network-switch__center-icon"
        display={DISPLAY.FLEX}
        alignItems={AlignItems.center}
        justifyContent={JustifyContent.center}
      >
        <i className="fa fa-angle-right fa-lg confirmation-network-switch__check" />
        <div className="confirmation-network-switch__dashed-line" />
      </Box>
      <Box
        className="confirmation-network-switch__icon"
        display={DISPLAY.BLOCK}
      >
<<<<<<< HEAD
        {newNetwork.chainId in CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP ? (
          <SiteIcon
            icon={CHAIN_ID_TO_NETWORK_IMAGE_URL_MAP[newNetwork.chainId]}
            name={newNetwork.nickname}
            size={64}
          />
        ) : (
          <div className="confirmation-network-switch__unknown-icon">
            <i className="fa fa-question fa-2x" />
          </div>
        )}
        <Typography
          color={TextColor.textDefault}
          variant={TypographyVariant.H6}
          fontWeight={FONT_WEIGHT.NORMAL}
          align={TEXT_ALIGN.CENTER}
          boxProps={{
            display: DISPLAY.FLEX,
            justifyContent: JustifyContent.center,
          }}
        >
          {newNetwork.nickname}
        </Typography>
=======
        <AvatarNetwork
          src={toNetworkDetails.iconUrl}
          name={toNetworkDetails.nickname}
          size={AvatarNetworkSize.Xl}
          marginBottom={2}
        />
        <Text display={Display.Flex} justifyContent={JustifyContent.center}>
          {toNetworkDetails.nickname}
        </Text>
>>>>>>> circle-retry
      </Box>
    </Box>
  );
}

ConfirmationNetworkSwitch.propTypes = {
  newNetwork: PropTypes.shape({
    chainId: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
  }),
};
