import { enqueueSnackbar } from 'notistack'

export default function alert(message, alertType,) {
    if (alertType === 'success') {
      enqueueSnackbar(message, { variant: 'success', anchorOrigin : { vertical: 'top', horizontal: 'right', }, })
    } else if (alertType === 'error') {
      enqueueSnackbar(message, { variant: 'error', anchorOrigin : { vertical: 'top', horizontal: 'right', }, })
    } else if (alertType === 'warning') {
      enqueueSnackbar(message, { variant: 'warning', anchorOrigin : { vertical: 'top', horizontal: 'right', }, })
    } else if (alertType === 'info') {
      enqueueSnackbar(message, { variant: 'info', anchorOrigin : { vertical: 'top', horizontal: 'right', }, })
    } else {
      enqueueSnackbar(message, { variant: 'default', anchorOrigin : { vertical: 'top', horizontal: 'right', }, })
    }
}