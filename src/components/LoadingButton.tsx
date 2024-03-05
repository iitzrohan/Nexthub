interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
}

export default function LoadingButton({
  children,
  loading,
  ...props
}: LoadingButtonProps) {
  return (
    <button
      {...props}
      disabled={props.disabled || loading}
      className="btn btn-primary"
    >
      <span className="flex items-center justify-center gap-1">
        {loading && <span className="loading loading-spinner loading-xs" />}
        {children}
      </span>
    </button>
  );
}
