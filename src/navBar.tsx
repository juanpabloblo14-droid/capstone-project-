export default function NavBar({searchTerm, setsearchTerm}){
  return(
    <div className="flex justify-between p-1 bg-amber-200">
     <h1 className= "text-2xl ">🐾 adopt a friend</h1>
     <input value={searchTerm} onChange={(event) => setsearchTerm(event.target.value)}className="outline-2 outline-offset-2 outline-black-800 rounded-xl "type="search" placeholder="Search"></input>
    </div>
  )
}