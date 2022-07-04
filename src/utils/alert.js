import Swal from 'sweetalert2'

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
});


export const confirm = () => {
  Toast.fire({
    icon: 'success',
    title: '¡Gracias por contactarte conmigo!',
  })
}



export const error = () => {
  Toast.fire({
    icon: 'error',
    title: '¡Error! Por favor intenta de nuevo 😥',
  })

}