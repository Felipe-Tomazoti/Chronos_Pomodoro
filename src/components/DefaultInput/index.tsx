type DewfaultInputProps = {
  id: string;
  labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
  labelText,
  id,
  type,
  ...rest
}: DewfaultInputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} {...rest} />
    </>
  );
}
