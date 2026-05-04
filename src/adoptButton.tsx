interface AdoptButtonprops{
    onAdopt: () => void;
}
export default function AdoptButton({onAdopt}: AdoptButtonprops){
    return(
<div>
    <button onClick={onAdopt}className="bg-zinc-800  text-slate-50 flex rounded-xl p-2 ">adopt</button>
</div>
    )
}