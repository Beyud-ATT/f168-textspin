export default function CustomButton({
  label,
  px,
  py,
  text,
  active = true,
  style,
  className,
  prefix,
  ...rest
}) {
  return (
    <button
      style={{
        borderRadius: "27.922px",
        border: "0.735px solid #FFF9E7",
        background: active
          ? "linear-gradient(0deg, #B9242D 0%, #D65E3D 100%)"
          : "linear-gradient(0deg, #C2B8B6 0%, #E3E3E3 100%)",
        boxShadow: active
          ? "0px 2.939px 0px 0px #892700"
          : "0px 2.736px 5.471px 0px rgba(0, 0, 0, 0.50)",
        ...style,
      }}
      className={`font-carbon ${
        active ? "text-[var(--text-color)]" : "text-[#898989]"
      } md:text-lg text-[${text}] font-bold px-${px} py-${py} ${className}`}
      {...rest}
    >
      {prefix && <span className="mr-2">{prefix}</span>}
      <span>{label}</span>
    </button>
  );
}
