export default function Button({ valueChanged }: { valueChanged: boolean }) {
  return (
    <>
      <div
        className={`${
          valueChanged ? "bg-black" : "bg-slate-300"
        }  text-center text-white py-2 text-xl mt-8`}
      >
        <button className="rounded-none">Enregistrer</button>
      </div>
    </>
  );
}
