export default function Icon({ name, size, className = '', style }) {
  return (
    <span
      className={`material-symbols-rounded ${className}`}
      style={{ fontSize: size, ...style }}
      aria-hidden="true"
    >
      {name}
    </span>
  )
}
