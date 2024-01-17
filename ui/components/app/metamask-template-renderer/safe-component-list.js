import Button from '../../ui/button';
import Chip from '../../ui/chip';
import DefinitionList from '../../ui/definition-list';
import TruncatedDefinitionList from '../../ui/truncated-definition-list';
import Popover from '../../ui/popover';
import Typography from '../../ui/typography';
import Box from '../../ui/box';
import MetaMaskTranslation from '../metamask-translation';
import NetworkDisplay from '../network-display';
import TextArea from '../../ui/textarea/textarea';
<<<<<<< HEAD
=======
import TextField from '../../ui/text-field';
import ConfirmationNetworkSwitch from '../../../pages/confirmation/components/confirmation-network-switch';
import UrlIcon from '../../ui/url-icon';
import Tooltip from '../../ui/tooltip/tooltip';
import { AvatarIcon, Text } from '../../component-library';
import ActionableMessage from '../../ui/actionable-message/actionable-message';
import { AccountListItem } from '../../multichain';
///: BEGIN:ONLY_INCLUDE_IF(snaps)
import { ConfirmInfoRow, ConfirmInfoRowAddress } from '../confirm/info/row';
import { SnapDelineator } from '../snaps/snap-delineator';
import { Copyable } from '../snaps/copyable';
import Spinner from '../../ui/spinner';
import { SnapUIMarkdown } from '../snaps/snap-ui-markdown';
import { SnapUIImage } from '../snaps/snap-ui-image';
///: END:ONLY_INCLUDE_IF
///: BEGIN:ONLY_INCLUDE_IF(keyring-snaps)
import { CreateSnapAccount } from '../../../pages/create-snap-account';
import {
  RemoveSnapAccount,
  SnapAccountCard,
} from '../../../pages/remove-snap-account';
import { SnapAccountRedirect } from '../../../pages/snap-account-redirect';
import SnapAuthorshipHeader from '../snaps/snap-authorship-header';
///: END:ONLY_INCLUDE_IF
>>>>>>> circle-retry

export const safeComponentList = {
  MetaMaskTranslation,
  a: 'a',
  b: 'b',
  p: 'p',
  div: 'div',
  span: 'span',
  Typography,
  Chip,
  DefinitionList,
  TruncatedDefinitionList,
  Button,
  Popover,
<<<<<<< HEAD
  Box,
  NetworkDisplay,
  TextArea,
=======
  span: 'span',
  Text,
  TextArea,
  TextField,
  Tooltip,
  TruncatedDefinitionList,
  Typography,
  UrlIcon,
  ///: BEGIN:ONLY_INCLUDE_IF(snaps)
  Copyable,
  SnapDelineator,
  SnapUIMarkdown,
  SnapUIImage,
  Spinner,
  ConfirmInfoRow,
  ConfirmInfoRowAddress,
  ///: END:ONLY_INCLUDE_IF
  ///: BEGIN:ONLY_INCLUDE_IF(keyring-snaps)
  CreateSnapAccount,
  RemoveSnapAccount,
  SnapAuthorshipHeader,
  SnapAccountRedirect,
  SnapAccountCard,
  ///: END:ONLY_INCLUDE_IF
>>>>>>> circle-retry
};
