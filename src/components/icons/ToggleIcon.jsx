export function ToggleIcon({ id, ...props }) {
  return (
    <svg
      id={id}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      fill="currentColor"
      {...props}
    >
      <path d="M160 128C89.3 128 32 185.3 32 256s57.3 128 128 128H416c70.7 0 128-57.3 128-128s-57.3-128-128-128H160zM0 256C0 167.6 71.6 96 160 96H416c88.4 0 160 71.6 160 160s-71.6 160-160 160H160C71.6 416 0 344.4 0 256zm480 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-160 0a96 96 0 1 1 192 0 96 96 0 1 1 -192 0z" />
    </svg>
  )
}
