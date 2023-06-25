import { ToastContainer } from 'react-toastify';

import  styled  from 'styled-components';

export const StylesToasty = styled(ToastContainer)`
  .Toastify__toasty--success {
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    font-size: 1rem;
    font-weight: 700;

    .Toastify__progress-bar--success {
      background-color: var(--color-sucess);
    }

    .Toastify__toast-body {
      svg {
        fill: var(--color-sucess);
      }
    }
  }
  .Toastify__toast--error {
    color: var(--color-grey-0);
    background-color: var(--color-grey-2);
    font-size: 1rem;
    font-weight: 700;
  }

  .Toastify__toast-body {
    svg {
      fill: var(--color-negative);
    }
  }

  .Toastify__progress-bar--error {
    background-color: var(--color-negative);
  }
`;
