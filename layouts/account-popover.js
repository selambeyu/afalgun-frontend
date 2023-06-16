import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { Box, Divider, MenuItem, MenuList, Popover, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export const AccountPopover = (props) => {
  const { anchorEl, onClose, open } = props;
  const router = useRouter();
  const {logOut, user} = useAuth();

  const handleSignOut = useCallback(
    () => {
      onClose?.();
      logOut();
      router.push('/auth/login');
    },
    [onClose, router]
  );

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: 'left',
        vertical: 'bottom'
      }}
      onClose={onClose}
      open={open}
      PaperProps={{ sx: { width: 200 } }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2
        }}
      >
        <Typography variant="overline">
          Account
        </Typography>
        <Link href={`/account`}>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          { user ? user.email : null}
        </Typography>
        </Link>
       
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1
          }
        }}
      >
        <MenuItem onClick={handleSignOut}>
          Sign out
        </MenuItem>
      </MenuList>
    </Popover>
  );
};

AccountPopover.propTypes = {
  anchorEl: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired
};
