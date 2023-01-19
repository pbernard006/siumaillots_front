export default function ElementsProfile({
  name,
  selected,
}: {
  name: string;
  selected: boolean;
}) {
  return (
    <div
      className={`${
        selected ? "bg-slate-300" : "bg-black"
      } my-10 mx-auto font-bold rounded-3xl text-white w-full h-9 flex items-center justify-center py-5`}
    >
      <label>{name}</label>
    </div>
  );
}
