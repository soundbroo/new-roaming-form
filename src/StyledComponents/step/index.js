import styled from 'styled-components'
import { Card, Grid, IconButton } from '@material-ui/core';
import { TextField } from 'final-form-material-ui'

export const StyledTextField = styled(TextField)`
 && {
   min-height: 70px;
  }
`

export const StyledGrid = styled(Grid)`
 && {
   max-height: 80px;
  }
`

export const StyledIconButton = styled(IconButton)`
 && {
   position: absolute;
   top: -1px;
   right: -1px;
   z-index: 1;
  }
`

export const MainCard = styled(Card)`
 && {
   width: 580px;
   padding: 10px;
   margin-bottom: 10px;
   position: relative;
  }
`

export const GridButton = styled(Grid)`
 && {
   width: 600px;
   margin-top: 20px;
   display: flex;
   justify-content: space-between;
  }
`
