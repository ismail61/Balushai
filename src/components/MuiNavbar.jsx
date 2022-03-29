import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import CatchingPokemon from '@mui/icons-material/CatchingPokemon'
import AccountCircle from '@mui/icons-material/AccountCircle'
import MessageRounded from '@mui/icons-material/MessageRounded'

export default function MuiNavbar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton>
          <CatchingPokemon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          BALUSHAI VENDOR
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Sign Up</Button>
          <Button color='inherit'>Sign In</Button>
          <IconButton>
            <AccountCircle/>
          </IconButton>
          <IconButton>
            <MessageRounded/>
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}
