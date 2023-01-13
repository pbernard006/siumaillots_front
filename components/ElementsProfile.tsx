export default function ElementsProfile({name}: { name: string}){

    return (
    <div className="my-10 mx-auto font-bold rounded-3xl bg-black text-white w-1/3 h-9 flex items-center justify-center">
        <label>{name}</label>
    </div>
    )   
}